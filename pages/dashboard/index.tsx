import { GetServerSideProps, NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layouts";
import LayoutNoContainer from "../../components/Layouts/LayoutNoContainer";
import { useNewApplicationStore, useUserStore } from "../../store";
import { prisma } from "../../db";
import { Application, User, UserApplication } from "@prisma/client";
import "moment/locale/ar";
import moment from "moment";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import fetch from "node-fetch";
import { TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import { v4 } from "uuid";

import { useForm } from "react-hook-form";

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration: string;
  discriminator: string;
  public_flags: number;
  banner: string;
  banner_color: string;
  accent_color: string;
}

interface DashboardHomeProps {
  applications: Application[];
  userApplications: (UserApplication & {
    application: Application;
    user: User;
    userDiscord: DiscordUser;
  })[];
}

const DashboardHome: NextPage<DashboardHomeProps> = ({
  applications,
  userApplications,
}) => {
  const { user, loading } = useUserStore();
  const router = useRouter();
  const [newApplicationModalOpen, setNewApplicationModalOpen] = useState(false);

  const {
    application: newApplication,
    deleteQuestionTitle,
    newQuestion,
    updateQuestionTitle,
  } = useNewApplicationStore();

  const [displayedApplications, setDisplayedApplications] =
    useState(applications);
  const [displayedUserApplications, setDisplayedUserApplications] =
    useState(userApplications);

  const pendingUserApplications = displayedUserApplications.filter(
    (a) => a.status === "PENDING"
  );
  const acceptedUserApplications = displayedUserApplications.filter(
    (a) => a.status === "ACCEPTED"
  );
  const refusedUserApplications = displayedUserApplications.filter(
    (a) => a.status === "REFUSED"
  );

  const { handleSubmit, register } = useForm();

  if (loading)
    return (
      <Layout>
        <div>جارى التحميل...</div>
      </Layout>
    );

  if (!user?.admin) {
    setTimeout(() => {
      router.push("/");
    }, 2500);
    return (
      <Layout>
        <div>
          لا يوجد معك الصلاحيات المطلوبة للدخول الى هذة الصفحة جارى تحويلك الى
          الصفحة الرئيسية...
        </div>
      </Layout>
    );
  }

  async function deleteApplication(id: string) {
    setDisplayedApplications((state) =>
      state.filter((application) => application.id !== id)
    );
    await axios({
      url: `/api/application/delete?applicationId=${id}`,
      withCredentials: true,
    });
  }

  async function updateUserApplication(
    id: string,
    newStatus: UserApplication["status"]
  ) {
    setDisplayedUserApplications((state) =>
      state.map((userApplication) => {
        if (userApplication.id !== id) return userApplication;
        userApplication.status = newStatus;
        return userApplication;
      })
    );
    await axios({
      url: `/api/application/editUserApplication?applicationId=${id}&status=${newStatus}`,
      withCredentials: true,
    });
  }

  async function onSubmit(d: any) {
    const keys = Object.keys(d);
    const result: Partial<Application> = { ...newApplication, questions: [] };
    keys.map((key) => {
      const [_, id] = key.split("quetion-");
      const value = d[key];
      if (value) {
        result.questions?.push({ id, title: value, response: null });
      }
    });

    setNewApplicationModalOpen(false);

    try {
      const { data } = await axios({
        url: "/api/application/create",
        method: "POST",
        data: {
          application: result,
        },
      });
      setDisplayedApplications((state) => [...state, data]);
    } catch (err) {
      console.log(err);
    }

    console.log(result);
  }

  return (
    <LayoutNoContainer>
      <main className="!mb-16 space-y-16">
        <Head>
          <title>Wolfland - لوحة تحكم ولف لاند</title>
          <meta
            name="description"
            content="Wolfland - عالم الخيال والابداع فى الرول بلاى"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-gradient-to-r from-primary to-root py-10">
          <div className="container mx-auto flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              لوحة التحكم
            </h1>
            <p className="max-w-2xl text-neutral-100">
              هنا يمكنك التحكم بالموقع والتقديمات والقوانين والاسئلة
            </p>
          </div>
        </header>

        <div className="container mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <h1 className="text-xl">
                النماذج ({displayedApplications.length})
              </h1>
            </div>

            <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedApplications.map((application) => {
                return (
                  <div
                    key={application.id}
                    className="flex flex-col gap-4 rounded-md bg-root-100 p-4"
                  >
                    <div>
                      {[
                        { title: "أيديى النموذج", value: application.id },
                        {
                          title: "تاريخ أضافة النموذج",
                          value: moment(application.createdAt)
                            .locale("ar")
                            .format("MMMM Do YYYY, h:mm:ss a"),
                        },
                      ].map(({ title, value }) => {
                        return (
                          <div key={title + value + application.id}>
                            <h1 className="font-bold">{title}:</h1>
                            <span className="text-neutral-100">{value}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-2">
                      <h1 className="font-bold">الأسئلة : </h1>
                      <div className="flex flex-col gap-1">
                        {application.questions.map((quetion, index) => {
                          return (
                            <div key={quetion.id}>
                              <h3 className="flex w-full items-center justify-between rounded-md bg-root-200 py-2 px-4 text-sm">
                                س{index + 1} {quetion.title}
                              </h3>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      onClick={() => deleteApplication(application.id)}
                      className="btn-secondary w-full"
                    >
                      <TrashIcon className="h-6 w-6"></TrashIcon>
                      <span>حذف النموذج</span>
                    </button>
                  </div>
                );
              })}

              <Dialog.Root
                open={newApplicationModalOpen}
                onOpenChange={setNewApplicationModalOpen}
              >
                <Dialog.Trigger asChild>
                  <button
                    key={"new-application"}
                    className="flex select-none flex-col items-center justify-center gap-4 rounded-md bg-root-100 p-6 transition hover:bg-root-200"
                  >
                    <div className="flex flex-col items-center justify-center ">
                      <PlusIcon className="h-52 w-52"></PlusIcon>
                      <span className="text-xl font-bold">
                        اضف نموذجا جديدا
                      </span>
                    </div>
                  </button>
                </Dialog.Trigger>

                <Dialog.Portal key={v4()}>
                  <Dialog.Overlay className="fixed inset-0 z-50 grid place-items-center bg-root/50">
                    <Dialog.Content className="max-h-screen w-full max-w-xl space-y-4 overflow-y-scroll rounded-md bg-root-100 p-4">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl font-bold">
                          أضف نموذج جديد
                        </Dialog.Title>
                        <Dialog.Close className="rounded-full p-1.5 hover:bg-root-200/25 focus:bg-root-200/50 active:bg-root-200">
                          <XMarkIcon className="h-5 w-5"></XMarkIcon>
                        </Dialog.Close>
                      </div>

                      <div className="space-y-2">
                        <h1 className="text-lg font-semibold">
                          ({newApplication.questions?.length}) الاسئلة
                        </h1>
                        <form
                          className="flex flex-col gap-4"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {newApplication.questions?.map((quetion, index) => {
                            return (
                              <div key={quetion.id} className="space-y-2">
                                <span className="text-xs">س{index + 1}</span>
                                <div className="flex items-center gap-4">
                                  <input
                                    {...register(`quetion-${quetion.id}`)}
                                    type={"text"}
                                    className="Input bg-root-200 ring-2 ring-root focus:outline-none focus:ring-4"
                                  ></input>
                                  <button
                                    disabled={index === 0}
                                    onClick={() =>
                                      deleteQuestionTitle(quetion.id)
                                    }
                                    className="flex justify-center rounded bg-secondary p-2 disabled:bg-secondary/50"
                                  >
                                    <TrashIcon className="h-5 w-5"></TrashIcon>
                                  </button>
                                </div>
                              </div>
                            );
                          })}

                          <button
                            onClick={() => newQuestion()}
                            className=" flex h-9 items-center justify-center gap-2 rounded bg-root-200 text-center ring-2 ring-root hover:bg-root-200/25 focus:bg-root-200/50 focus:outline-none focus:ring-4 active:bg-root-200"
                          >
                            <PlusIcon className="h-5 w-5"></PlusIcon>
                            <span>أضف سؤالا جديدا</span>
                          </button>

                          <input
                            className="flex h-9 items-center justify-center gap-2 rounded bg-root-200 text-center ring-2 ring-root hover:bg-root-200/25 focus:bg-root-200/50 focus:outline-none focus:ring-4 active:bg-root-200"
                            type={"submit"}
                            value={"أضف النموذج"}
                          />
                        </form>
                      </div>
                    </Dialog.Content>
                  </Dialog.Overlay>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
          {[
            { title: "التقديمات الجارية", value: pendingUserApplications },
            { title: "التقديمات المرفوضة", value: refusedUserApplications },
            { title: "التقديمات المقبولة", value: acceptedUserApplications },
          ].map(({ title, value }) => {
            return (
              <div key={title} className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <h1 className="text-xl">
                    {title} ({value.length})
                  </h1>
                </div>

                <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {value.map((userApplication) => {
                    return (
                      <div
                        key={
                          userApplication.id +
                          userApplication.status +
                          userApplication.userId
                        }
                        className="flex flex-col gap-4 rounded-md bg-root-100 p-4"
                      >
                        <div className="space-y-2">
                          <div className="space-y-2">
                            {[
                              {
                                title: "أيديى التقديم",
                                value: userApplication.id,
                              },
                              {
                                title: "أيديى النموذج",
                                value: userApplication.application.id,
                              },
                              {
                                title: "ديسكورد المقدم",
                                value: `(${userApplication.user.discordID}) ${userApplication.userDiscord.username}#${userApplication.userDiscord.discriminator}`,
                                image: `https://cdn.discordapp.com/avatars/${userApplication.userDiscord.id}/${userApplication.userDiscord.avatar}.png`,
                              },
                            ].map(({ title, value, image }) => {
                              return (
                                <div key={title + value + userApplication.id}>
                                  <h1 className="font-bold">{title}:</h1>
                                  <div className="flex items-center gap-2">
                                    {image && (
                                      <img
                                        src={image}
                                        className="h-6 w-6 rounded-full"
                                        alt={value}
                                      />
                                    )}

                                    <span
                                      dir="ltr"
                                      className="text-neutral-100"
                                    >
                                      {value}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="grid grid-flow-row grid-cols-2 gap-1">
                            {[
                              {
                                title: "أسم المقدم",
                                value: userApplication.additionalUserInfo?.name,
                              },
                              {
                                title: "عمر المقدم",
                                value:
                                  userApplication.additionalUserInfo?.age +
                                  " سنة",
                              },
                              {
                                title: "أسم حساب سونى المقدم",
                                value:
                                  userApplication.additionalUserInfo
                                    ?.sonyAccountName,
                              },
                              {
                                title: "تاريخ التقديم",
                                value: moment(userApplication.createdAt)
                                  .locale("ar")
                                  .format("MMMM Do YYYY, h:mm:ss a"),
                              },
                              userApplication.status === "ACCEPTED"
                                ? {
                                    title: "تاريخ القبول",
                                    value: moment(userApplication.updatedAt)
                                      .locale("ar")
                                      .format("MMMM Do YYYY, h:mm:ss a"),
                                  }
                                : userApplication.status === "REFUSED"
                                ? {
                                    title: "تاريخ الرفض",
                                    value: moment(userApplication.updatedAt)
                                      .locale("ar")
                                      .format("MMMM Do YYYY, h:mm:ss a"),
                                  }
                                : {
                                    title: "",
                                    value: "",
                                  },
                            ]
                              .filter(
                                (a) =>
                                  a.title != undefined && a.value != undefined
                              )
                              .map(({ title, value }) => {
                                return (
                                  <div key={title + value + userApplication.id}>
                                    <h1 className="font-bold">{title}:</h1>
                                    <span className="text-neutral-100">
                                      {value}
                                    </span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h1 className="font-bold">الأسئلة : </h1>
                          <Accordion.Root
                            type="single"
                            className="w-full rounded-md bg-root-200 md:col-span-2"
                            collapsible={true}
                          >
                            {userApplication.application.questions.map(
                              ({ title, id }) => {
                                const userQuetioneWithResponse =
                                  userApplication.questions.find(
                                    (q) => q.id === id
                                  )!;

                                return (
                                  <Accordion.Item
                                    key={title}
                                    value={title}
                                    className="overflow-hidden"
                                  >
                                    <Accordion.Header className="rounded-md bg-root-100">
                                      <Accordion.Trigger className="AccordionTrigger flex w-full items-center justify-between rounded-md bg-root-200 py-2 px-4 text-right hover:bg-root-200/25">
                                        <span>{title}</span>
                                        <ChevronDownIcon className="AccordionChevron h-5 w-5 min-h-fit min-w-fit max-h-5 max-w-[1.25rem]"></ChevronDownIcon>
                                      </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="AccordionContent overflow-hidden bg-root px-4 text-neutral-100">
                                      <p
                                        className="py-2"
                                        dangerouslySetInnerHTML={{
                                          __html: userQuetioneWithResponse
                                            .response!.replaceAll("\n", "<br/>")
                                            .trim(),
                                        }}
                                      ></p>
                                    </Accordion.Content>
                                  </Accordion.Item>
                                );
                              }
                            )}
                          </Accordion.Root>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                          {userApplication.status !== "ACCEPTED" && (
                            <button
                              onClick={() =>
                                updateUserApplication(
                                  userApplication.id,
                                  "ACCEPTED"
                                )
                              }
                              className="btn-primary w-full !px-4"
                            >
                              <span>قبول التقديم</span>
                            </button>
                          )}
                          {userApplication.status !== "REFUSED" && (
                            <button
                              onClick={() =>
                                updateUserApplication(
                                  userApplication.id,
                                  "REFUSED"
                                )
                              }
                              className="btn-secondary w-full !px-4"
                            >
                              <span>رفض التقديم</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </LayoutNoContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const applications = await prisma.application.findMany({
    where: { hidden: false },
  });

  const userApplications = await prisma.userApplication.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      application: true,
      user: true,
    },
    take: 250,
  });

  console.log(applications, userApplications);

  const userApplicationsWithDiscordUserInfo = await Promise.all(
    userApplications.map(async (application) => {
      const discordUserInfo = await fetch(
        `https://discord.com/api/v10/users/${application.user.discordID}`,
        {
          headers: {
            Authorization: "Bot " + process.env.DISCORD_CLIENT_TOKEN!,
          },
        }
      );

      return { ...application, userDiscord: await discordUserInfo.json() };
    })
  );
  //discord.com/api/v10/users/830090378039394405
  https: return {
    props: {
      applications: JSON.parse(JSON.stringify(applications)),
      userApplications: JSON.parse(
        JSON.stringify(userApplicationsWithDiscordUserInfo)
      ),
    },
  };
};

export default DashboardHome;
