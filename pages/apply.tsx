import { Application, UserApplication } from "@prisma/client";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useUserStore } from "../store";
import fetch from "node-fetch";
import { prisma } from "../db";
import { useForm } from "react-hook-form";

interface ApplyPageProps {
  randomApplyApplication: Application;
}

const Apply: NextPage<ApplyPageProps> = ({ randomApplyApplication }) => {
  const { user, loading } = useUserStore();
  const [formData, setFormData] = useState({
    id: randomApplyApplication?.id,
    additionalUserInfo: {
      name: "",
      age: 0,
      sonyAccountName: "",
    },
    questions: randomApplyApplication?.questions || [],
    stage: 1,
    loadingSubmit: false,
    error: "",
  });

  const inputs =
    formData.stage === 1
      ? [
          {
            title: "أسمك",
            type: "text",
            key: "name",
            required: true,
          },
          {
            title: "عمرك",
            type: "number",
            key: "age",
            max: 99,
            required: true,
          },
          {
            title: "أسم اكونتك السونى",
            type: "text",
            key: "sonyAccountName",
            required: true,
          },
        ]
      : formData.questions?.map((question) => {
          return {
            title: question.title,
            type: "text",
            key: "question-" + question?.id,
            required: true,
          };
        });

  const { register, handleSubmit } = useForm();

  useEffect(() => console.log(formData), [formData]);

  async function onNextClick(data: any) {
    if (formData.stage === 1) {
      setFormData((state) => ({
        ...state,
        additionalUserInfo: data,
        stage: 2,
      }));
    } else if (formData.stage === 2) {
      const result: Partial<UserApplication> = {
        additionalUserInfo: formData.additionalUserInfo,
        questions: [],
      };

      Object.keys(data).map((key) => {
        if (!key.includes("question-")) return;
        const [_, id] = key.split("question-");
        const question = formData.questions.find((q) => q.id == id)!;
        const value = data[key];
        if (value) {
          result.questions?.push({
            id,
            title: question.title,
            response: value,
          });
        }
      });

      setFormData((state) => ({ ...state, loadingSubmit: true, stage: 3 }));

      try {
        const { data: sumbitResult } = await axios({
          method: "POST",
          url: "/api/application/submitResults?applicationId=" + formData.id,
          data: {
            quetions: result.questions,
            additionalUserInfo: result.additionalUserInfo,
          },
        });

        console.log(sumbitResult);
        setFormData((state) => ({ ...state, loadingSubmit: false }));
      } catch (err: any) {
        setFormData((state) => ({
          ...state,
          loadingSubmit: false,
          error: err.response.data.error,
        }));
      }

      console.log(result);
    }
  }

  if (!loading && user) {
    return (
      <>
        <Layout>
          <div className="mt-4 rounded-md bg-root-100 p-6 py-8">
            {!randomApplyApplication ? (
              <h1 className="text-center">لا يوجد نماذج تقديم الان!</h1>
            ) : user.activated ? (
              <h1 className="text-center">أنت مفعل بالفعل</h1>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="relative flex items-center gap-16">
                    <div className="absolute inset-x-0 top-4 z-10 rounded-full border-2 border-root-200"></div>
                    <div className="z-20 flex items-center">
                      <button
                        className="relative flex select-none flex-col items-center gap-2 px-6"
                        onClick={() =>
                          setFormData((state) => ({ ...state, stage: 1 }))
                        }
                      >
                        <div
                          className={`z-30 flex h-8 w-8 items-center justify-center rounded-full ${
                            formData.stage === 1 ? "bg-primary" : "bg-root-200"
                          } text-center`}
                        >
                          <span>1</span>
                        </div>
                        <span>أدخال معلوماتك</span>

                        {formData.stage >= 1 && (
                          <div className="absolute inset-x-0 top-4 z-10 rounded-r-full border-2 border-primary"></div>
                        )}
                      </button>

                      <button
                        disabled={formData.stage < 2}
                        onClick={() =>
                          setFormData((state) => ({ ...state, stage: 2 }))
                        }
                        className="relative flex select-none flex-col items-center gap-2 px-6"
                      >
                        <div
                          className={`z-30 flex h-8 w-8 items-center justify-center rounded-full ${
                            formData.stage === 2 ? "bg-primary" : "bg-root-200"
                          } text-center`}
                        >
                          <span>2</span>
                        </div>
                        <span>أختبار التقديم</span>

                        {formData.stage >= 2 && (
                          <div className="absolute inset-x-0 top-4 z-10 rounded-l-full border-2 border-primary"></div>
                        )}
                      </button>

                      <button
                        disabled={formData.stage < 3}
                        onClick={() =>
                          setFormData((state) => ({ ...state, stage: 3 }))
                        }
                        className="relative flex select-none flex-col items-center gap-2 px-6"
                      >
                        <div
                          className={`z-30 flex h-8 w-8 items-center justify-center rounded-full ${
                            formData.stage === 3 ? "bg-primary" : "bg-root-200"
                          } text-center`}
                        >
                          <span>3</span>
                        </div>
                        <span>أرسال النتيجة</span>

                        {formData.stage >= 3 && (
                          <div className="absolute inset-x-0 top-4 z-10 rounded-l-full border-2 border-primary"></div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {formData.stage !== 3 ? (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(onNextClick)}
                  >
                    {inputs.map(({ key, title, type, max, required }) => {
                      return (
                        <label key={key} className="space-y-2">
                          <h1>{title}</h1>
                          <input
                            {...register(key)}
                            max={max}
                            type={type}
                            required={required}
                            className="Input bg-root-200 ring-2 ring-root focus:outline-none focus:ring-4"
                            placeholder={title}
                          ></input>
                        </label>
                      );
                    })}

                    <input
                      className="mt-2 btn-primary"
                      type={"submit"}
                      value={"التالى"}
                    />
                  </form>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <h1
                      className={`text-lg font-semibold ${
                        formData.error && "text-red-500"
                      }`}
                    >
                      {formData.loadingSubmit
                        ? "جارى أرسال تقديمك"
                        : formData.error || "تم أرسال تقديمك بنجاح"}
                    </h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div className="mt-4 rounded-md bg-root-100 p-4 py-8">
          {loading ? <LoadingSpinner /> : !user && <NotLoggedIn />}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const applications = await prisma.application.findMany({
    where: { hidden: false },
  });
  const application =
    applications[Math.floor(Math.random() * applications.length)];

  return {
    props: {
      randomApplyApplication: application
        ? JSON.parse(JSON.stringify(application))
        : null,
    },
  };
};

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-dashed border-primary"></div>
    </div>
  );
}

function SmallLoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-dashed border-primary"></div>
    </div>
  );
}

function NotLoggedIn() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">
        للمتابعة يرجى ربط حساب الديسكورد الخاص بك.
      </h1>
      <button
        onClick={() => signIn("discord")}
        className={`flex items-center gap-2 rounded-full bg-[#5865F2] py-2 px-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white md:h-8 md:w-8"
          viewBox="0 0 60 46"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_16"
                data-name="Rectangle 16"
                width="60"
                height="46"
                fill="#fff"
              />
            </clipPath>
          </defs>
          <g id="discord-mark-white" clipPath="url(#clip-path)">
            <path
              id="Path_13"
              data-name="Path 13"
              d="M50.58,4.187A49.271,49.271,0,0,0,38.418.415a.185.185,0,0,0-.2.092,34.322,34.322,0,0,0-1.514,3.111,45.487,45.487,0,0,0-13.66,0A31.479,31.479,0,0,0,21.511.507a.192.192,0,0,0-.2-.092A49.134,49.134,0,0,0,9.154,4.187a.174.174,0,0,0-.08.069C1.328,15.828-.794,27.116.247,38.264a.205.205,0,0,0,.078.14,49.547,49.547,0,0,0,14.92,7.542.193.193,0,0,0,.21-.069,35.412,35.412,0,0,0,3.052-4.965.189.189,0,0,0-.1-.263,32.629,32.629,0,0,1-4.661-2.221.192.192,0,0,1-.019-.318c.313-.235.627-.479.926-.725a.185.185,0,0,1,.193-.026,35.334,35.334,0,0,0,30.027,0,.184.184,0,0,1,.2.024c.3.247.612.493.928.728a.192.192,0,0,1-.016.318,30.618,30.618,0,0,1-4.663,2.219.191.191,0,0,0-.1.266,39.762,39.762,0,0,0,3.05,4.962.189.189,0,0,0,.21.071A49.383,49.383,0,0,0,59.414,38.4a.192.192,0,0,0,.078-.138A50.1,50.1,0,0,0,50.658,4.258.152.152,0,0,0,50.58,4.187ZM19.966,31.476c-2.944,0-5.37-2.7-5.37-6.022s2.379-6.022,5.37-6.022c3.014,0,5.417,2.726,5.37,6.022C25.336,28.773,22.957,31.476,19.966,31.476Zm19.853,0c-2.944,0-5.37-2.7-5.37-6.022s2.379-6.022,5.37-6.022c3.015,0,5.417,2.726,5.37,6.022C45.189,28.773,42.834,31.476,39.82,31.476Z"
              transform="translate(0 -0.065)"
              fill="#fff"
            />
          </g>
        </svg>
        <span>ربط مع الديسكورد</span>
      </button>
    </div>
  );
}

function Layout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <Navbar></Navbar>
        <header className="bg-gradient-to-r from-primary to-root py-10">
          <div className="container mx-auto flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              التقديم الاليكترونى
            </h1>
            <p className="max-w-2xl text-neutral-100">
              يجب قرائة جميع القوانين اللازمة للانضمام لنا! تضمن القوانين العامة
              وقوانين الشرطة والعدل والاسعاف والرقابة
            </p>
          </div>
        </header>
      </div>
      <div className="container mx-auto h-full">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Apply;
