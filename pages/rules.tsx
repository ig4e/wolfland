import React from "react";
import LayoutNoContainer from "../components/Layouts/LayoutNoContainer";
import wezaraDahelya from "../public/images/wezara-dahelya.webp";
import wezaraAdl from "../public/images/wezara-adl.png";
import { prisma } from "../db";

import Image, { StaticImageData } from "next/image";
import Head from "next/head";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { RuleSection } from "@prisma/client";

const Rules: NextPage<{ rules: RuleSection[] }> = ({ rules }) => {
  console.log(rules);

  return (
    <LayoutNoContainer>
      <main className="!mb-16 space-y-16">
        <Head>
          <title>Wolfland - قوانين ولف لاند</title>
          <meta
            name="description"
            content="Wolfland - عالم الخيال والابداع فى الرول بلاى"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:image" content="/favicon.png"></meta>
        </Head>
        <header className="bg-gradient-to-r from-primary to-root py-10">
          <div className="container mx-auto flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              القوانين
            </h1>
            <p className="max-w-2xl text-neutral-100">
              جميع القوانين اللازمة للانضمام لنا! تضمن القوانين العامة وقوانين
              الشرطة والعدل والاسعاف والرقابة والعصابات وتنويهات التقديم
            </p>
          </div>
        </header>

        <div className="container mx-auto space-y-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:hidden">
            <div className="flex items-center gap-4 text-4xl font-bold md:text-5xl lg:text-5xl">
              <Image
                className=""
                src={wezaraDahelya}
                alt={"الوزارة الداخلية"}
                width={48}
                height={48}
              ></Image>
              <h1>القوانين العامة</h1>
            </div>
            <p className="max-w-2xl text-neutral-100">
              القوانين العامة تعتبر هي قوانين الرول بلاي والتى يجب على الجميع
              قرائتها والتأكد من حظفها وفهمها بالكامل وبعدها يمكنك ان تقوم
              بالتقدم للأختبار والتعرف على التفعيل في وولف لاند
            </p>
          </div>

          {rules.map((ruleSection, index) => {
            return (
              <div key={ruleSection.title} className="space-y-8">
                <div
                  className="w-full rounded-full border-2 border-root-200"
                  hidden={index === 0}
                ></div>

                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <Image
                      className="h-28 w-28 md:h-48 md:w-48"
                      src={ruleSection.imageUrl}
                      alt={ruleSection.title}
                      unoptimized={true}
                      width={192}
                      height={192}
                    ></Image>
                    <div className="flex flex-col items-start gap-6">
                      <h1 className="text-3xl font-bold md:text-4xl">
                        {ruleSection.title}
                      </h1>
                      <p className="hidden text-neutral-100 md:block">
                        {ruleSection.description}
                      </p>
                      {ruleSection.apply && (
                        <Link
                          href={"/apply"}
                          className="btn-primary text-sm md:text-base"
                        >
                          التقديم الاليكترونى
                        </Link>
                      )}
                    </div>
                  </div>

                  <Accordion.Root
                    type="single"
                    className="w-full rounded-md bg-root-100"
                    collapsible={true}
                  >
                    <Accordion.Item
                      key={ruleSection.title + "description"}
                      value={ruleSection.title + "description"}
                      className="overflow-hidden md:hidden"
                    >
                      <Accordion.Header className="rounded-md bg-root-100">
                        <Accordion.Trigger className="AccordionTrigger flex w-full items-center justify-between rounded-md bg-root-100 py-2 px-4 hover:bg-root-200/25">
                          <span>التعريف</span>
                          <ChevronDownIcon className="AccordionChevron h-5 w-5"></ChevronDownIcon>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="AccordionContent overflow-hidden bg-root-200 px-4 text-neutral-100">
                        <p
                          className="py-2"
                          dangerouslySetInnerHTML={{
                            __html: ruleSection.description
                              .replaceAll("\n", "<br/>")
                              .trim(),
                          }}
                        ></p>
                      </Accordion.Content>
                    </Accordion.Item>
                    {ruleSection.rules.map(({ title, value }) => {
                      return (
                        <Accordion.Item
                          key={title}
                          value={title}
                          className="overflow-hidden"
                        >
                          <Accordion.Header className="rounded-md bg-root-100">
                            <Accordion.Trigger className="AccordionTrigger flex w-full items-center justify-between rounded-md bg-root-100 py-2 px-4 hover:bg-root-200/25">
                              <span>{title}</span>
                              <ChevronDownIcon className="AccordionChevron h-5 w-5"></ChevronDownIcon>
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="AccordionContent overflow-hidden bg-root-200 px-4 text-neutral-100">
                            <p
                              className="py-2"
                              dangerouslySetInnerHTML={{
                                __html: value.replaceAll("\n", "<br/>").trim(),
                              }}
                            ></p>
                          </Accordion.Content>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion.Root>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </LayoutNoContainer>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  let serverSettings = await prisma.mainSettings.findUnique({
    where: { id: "SERVER_SETTINGS" },
  });

  if (!serverSettings) {
    serverSettings = await prisma.mainSettings.create({
      data: {
        id: "SERVER_SETTINGS",
        nextUserIdNumber: 100,
      },
    });
  }

  return {
    props: {
      rules: serverSettings?.rules,
    },
    revalidate: 900,
  };
};

export default Rules;
