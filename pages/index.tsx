import Head from "next/head";
import Image from "next/image";
import LayoutNoContainer from "../components/Layouts/LayoutNoContainer";
import {
  BoltIcon,
  QuestionMarkCircleIcon,
  PhoneArrowDownLeftIcon,
  ShieldCheckIcon,
  UsersIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import WorldImage from "../public/images/world.png";
import Logo from "../public/images/logo.svg";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import { GetServerSideProps, NextPage } from "next";
import { Client, GatewayIntentBits } from "discord.js";

interface IPageProps {
  currentMembers: string;
  currentOnlineMembers: string;
  currentActivatedMembers: string;
  currentMods: string;
}

const Home: NextPage<IPageProps> = ({
  currentActivatedMembers,
  currentMembers,
  currentOnlineMembers,
  currentMods,
}) => {
  const cardsData = [
    {
      title: `تقمص الشخصيات`,
      desc: `هو مختلف لدينا بدولة وولف لاند لأنه من النوع الاحترافي والمتقن والغير خارج عن نطاق التقمص للشخصية؛ يكون بالتقمص لشخصية شرطي بوزارة الداخلية ومسعف بوزارة الصحة وإعلامي بوزارة الإعلام وغيره من شحصيات الدولة اللتي تُقمص بكل إحترافية عالية مما يزيد نسبة المتعة والواقعية باللعب. `,
      Icon: ({ className }: { className: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          className={className}
        >
          <g>
            <g id="Layer_x0020_1">
              <path d="m60 414c-18 0-34-6-45-18-10-10-15-23-15-37 0-25 8-84 19-134 6-29 13-53 20-70 10-23 20-34 32-34h58c2 0 4 1 5 3l6 7h27v81c0 4 4 7 7 7h163c4 0 7-3 7-7v-81h28l6-7c1-2 3-3 5-3h58c12 0 22 11 32 34 7 17 14 41 20 70 11 50 19 109 19 134 0 14-5 27-15 37-11 12-27 18-45 18-24 0-44-13-51-32l-24-68c-5 4-18 11-33 11-12 0-23-4-33-11h-110c-10 7-21 11-33 11-15 0-28-7-33-11l-24 68c-7 19-27 32-51 32zm196-123c-13 0-24-11-24-24s11-24 24-24 24 11 24 24-11 24-24 24zm0-34c-6 0-10 4-10 10s4 10 10 10 10-4 10-10-4-10-10-10zm124-49c-4 0-7-3-7-7v-7c0-4 3-7 7-7s7 3 7 7v7c0 4-3 7-7 7zm27 22h-7c-4 0-7-4-7-7 0-4 3-7 7-7h7c4 0 7 3 7 7 0 3-3 7-7 7zm22-20c-4 0-7-3-7-7v-7c0-4 3-7 7-7 3 0 7 3 7 7v7c0 4-4 7-7 7zm-20-29h-7c-4 0-7-3-7-7s3-7 7-7h7c4 0 7 3 7 7s-3 7-7 7zm-4 73c-29 0-53-24-53-53 0-30 24-54 53-54 30 0 54 24 54 54 0 29-24 53-54 53zm0-93c-21 0-39 18-39 40 0 21 18 39 39 39 22 0 40-18 40-39 0-22-18-40-40-40zm-324 47c-4 0-7-3-7-7v-7c0-4 3-7 7-7s7 3 7 7v7c0 4-3 7-7 7zm27 22h-7c-4 0-7-4-7-7 0-4 3-7 7-7h7c4 0 7 3 7 7 0 3-3 7-7 7zm22-20c-4 0-7-3-7-7v-7c0-4 3-7 7-7s7 3 7 7v7c0 4-3 7-7 7zm-20-29h-7c-4 0-7-3-7-7s3-7 7-7h7c4 0 7 3 7 7s-3 7-7 7zm-3 73c-30 0-54-24-54-53 0-30 24-54 54-54 29 0 53 24 53 54 0 29-24 53-53 53zm0-93c-22 0-40 18-40 40 0 21 18 39 40 39 21 0 39-18 39-39 0-22-18-40-39-40zm238 146c-19 0-34-15-34-34 0-18 15-33 34-33 18 0 33 15 33 33 0 19-15 34-33 34zm0-53c-11 0-20 8-20 19s9 20 20 20 19-9 19-20-8-19-19-19zm-178 53c-18 0-33-15-33-34 0-18 15-33 33-33 19 0 34 15 34 33 0 19-15 34-34 34zm0-53c-10 0-19 8-19 19s9 20 19 20c11 0 20-9 20-20s-9-19-20-19zm14-123h149v74h-149z"></path>
              <path d="m442 135h-52c-3 0-7-3-7-7v-19c0-3 2-6 5-7 10-2 20-4 29-4s19 2 27 5c3 0 5 3 5 6v19c0 4-3 7-7 7z"></path>
              <path d="m122 135h-52c-4 0-7-3-7-7v-19c0-3 2-6 5-7 10-2 19-4 29-4 9 0 18 2 27 5 3 0 5 3 5 6v19c0 4-4 7-7 7z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: `القوانين والأنظمة`,
      desc: `نحن نهتم بالقوانين والأنظمة بشكل كامل وعالي من قبل مسؤولين وتغير مستمر للقوانين والأنظمة والذي يزيد من نسبة الواقعية بالدولة (القيم) وتقليل نسبة المخالفات المخالفة لقوانين اللعب داخل السيرفر، وأيضًا داخل سيرفر "وولف لاند" لجميع الأعضاء ولإدارة وولف لاند الالتزام والتقيد بها لتجنب المشاكل داخل السيرفر والدولة (القيم). `,
      Icon: ({ className }: { className: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          className={className}
        >
          <g>
            <g>
              <path d="m90 45v377h212v45c0 24.813 20.187 45 45 45s45-20.187 45-45v-422c0-.778.02-1.552.059-2.32.489-15.977 5.979-30.715 14.982-42.68h-272.041c-24.75 0-45 20.25-45 45zm75 31h152v30h-152zm0 60h152v30h-152zm0 60h152v30h-152zm0 60h152v30h-152zm0 60h152v30h-152z"></path>
              <path d="m467 0c-24.853 0-45 20.147-45 45v15h90v-15c0-24.853-20.147-45-45-45z"></path>
              <path d="m272 452h-272v15c0 24.75 20.25 45 45 45h242.041c-9.438-12.544-15.041-28.129-15.041-45z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: `الماب`,
      desc: `الماب مصمم بعناية من قبل مصممين المابات والذي يعتبر من المابات الإحترافية والواقعية بالتصميم وإخنيار النقاط (المراكز) الأفضل للعب واختيار أفضل للعتاد وللسيارات الحكومية وللسيارات الخاصة وغيرها من الاشياء اللتي يتميز بها سيرفرنا؛ وهذه دليل لجودة إختيار السيرفر الاشياء الأفضل لكم للاستمتاع وزيادة الواقعية بالعب وأيضًا والماب يتطور من فتره الى فتره للتطوير منه والتجديد داخل سيرفر "وولف لاند". `,
      Icon: ({ className }: { className: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          className={className}
        >
          <g>
            <g>
              <g>
                <path
                  d="M407,240.998c-57.891,0-105,47.109-105,105c0,22.104,6.812,43.257,19.878,61.406l73.125,98.588
            c2.827,3.779,7.28,6.006,11.997,6.006h0.015c4.717,0,9.17-2.241,11.997-6.021l76.084-102.909
            c11.06-16.992,16.904-36.724,16.904-57.07C512,288.107,464.891,240.998,407,240.998z M407,390.998c-24.814,0-45-20.186-45-45
            c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C452,370.812,431.814,390.998,407,390.998z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M22.72,2.137c-4.644-2.769-10.4-2.856-15.117-0.19C2.9,4.612,0,9.593,0,14.998v301c0,5.273,2.769,10.151,7.28,12.861
            L151,414.49V78.508L22.72,2.137z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M474.72,92.137L332,6.5v227.351c21.471-14.405,47.258-22.853,75-22.853s53.529,8.448,75,22.853V104.998
            C482,99.725,479.231,94.847,474.72,92.137z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M302,6.5L181,78.506V414.49l92.082-54.648c-0.474-4.598-1.082-9.175-1.082-13.845c0-31.816,11.521-60.707,30-83.806V6.5z"></path>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const statsData = [
    {
      title: `الأعضاء الحاليين`,
      value: `${currentMembers}+`,
      Icon: UsersIcon,
    },
    {
      title: `الأعضاء المفعلين`,
      value: `${currentActivatedMembers}+`,
      Icon: UserPlusIcon,
    },
    {
      title: `إدارة وولف لاند`,
      value: `${currentMods}+`,
      Icon: ShieldCheckIcon,
    },
  ];

  const faqs = [
    {
      title: `لدي مشكلة فى التقديم !`,
      value: `اذا كان لديك مشكلة فى التقديم فقط يمكنك ان تتواصل معانا لمحاولة حل مشكلتك في اسرع وقت`,
    },

    {
      title: `هل يمكن ان انضم الى فرق العمل؟`,
      value: `نعم بكل تأكيد! يمكنك الأنضمام الينا فى أدارة وولف لاند ولكن يجب ان تتوفر اليك بعض الشروط لكي تستطيع ان تقدم الى إدراتنا، مثل ان تقدم المساعده كاملة لجميع اللاعبين ولجميع الإعضاء عامةً ويجب ان تكون حسن الخلق وغيرها من الشروط اللتي يمكنك ماراجعتها داخل سيرفر الديسكورد والذهاب لشات <a class="text-primary" href="https://discord.com/channels/930200973262090311/933687993343045652">شروط التقديم .</a>`,
    },
  ];

  return (
    <LayoutNoContainer>
      <Head>
        <title>Wolfland - عالم الخيال والابداع فى الرول بلاى</title>
        <meta
          name="description"
          content="Wolfland - عالم الخيال والابداع فى الرول بلاى"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:image" content="/favicon.png"></meta>
      </Head>
      <main className="">
        <section className="bg-tri-y-clip relative">
          <header className="container mx-auto flex flex-col items-center gap-8 pb-12 pt-6 md:flex-row md:py-24">
            <Image
              alt="logo"
              className="hidden w-52 md:block"
              src={Logo}
            ></Image>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
                سيرفر وولف لاند
              </h1>
              <p className="max-w-2xl text-neutral-100">
                اهلاً بك عزيزي في سيرفر وعالم وولف لاند، السيرفر الأفضل في عالم
                الحياه الواقعية والرول بلاي حيث الواقعية والمتعة يمكنك الآن ان
                تنضم الينا عبر التفعيل الإلكتروني بالموقع الخاص بنا في خدمتكم
                دائما وأبداً
              </p>
              <div className="flex items-center gap-4">
                <Link href="/apply" className="btn-primary">
                  <span>أنضم لنا</span>
                </Link>
                <Link
                  href="/rules"
                  className="btn-primary-outline flex items-center gap-2 md:!px-6"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
                  <span>القوانين</span>
                </Link>
              </div>
            </div>
          </header>
        </section>
        <section className="container mx-auto grid grid-flow-row gap-4 md:grid-cols-2 md:items-center lg:grid-cols-3 lg:flex-row">
          {cardsData.map(({ title, desc, Icon }) => {
            return (
              <div
                key={title}
                className="flex h-full rounded-md bg-root-100 p-4"
              >
                <div className="flex gap-4">
                  <div className="flex h-full items-center justify-center rounded-md bg-root-200 p-4">
                    <Icon className="h-20 w-20 fill-current stroke-current text-primary"></Icon>
                  </div>
                  <div className="flex h-full flex-col items-start gap-2">
                    <h3 className="text-xl font-bold text-primary">{title}</h3>
                    <p className="text-neutral-100">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="bg-tri-r-clip relative pb-6">
          <header className="container mx-auto flex flex-col-reverse items-center justify-center gap-6 py-24 md:flex-row md:justify-between">
            <div className="flex h-full flex-col items-center gap-6 text-center md:items-start md:text-right">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl ">
                عالم وولف لاند
              </h1>
              <p className="max-w-2xl text-neutral-100">
                مرحبا بك في دولة وولف لاند حيث الإثارة والمتعة وحيث الواقعية فب
                اللعب و واقعية تقمص الشخصيات الذي يعمل في حماية وطنة العزيز
                وحماية من الفساد والهلاك للدولة والذي يهتم بمهام الإعلام المرئي
                والمسموع لضمان صدق الحدث و الذي يقوم بعلمه ومحافظًا على سلامة
                دولة بالمحافظة على ممتلكاتها وعدم تشويه سمعة وطنة والدفاع عنه
                لأجل وطنة الحبيب، كل وهذه وأكثر في دولة وولف لاند.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/apply" className="btn-secondary">
                  <span>أنضم لنا</span>
                </Link>
                <Link
                  href="/rules"
                  className="btn-secondary-outline flex items-center gap-2 md:!px-6"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
                  <span>القوانين</span>
                </Link>
              </div>
            </div>
            <div className="w-auto md:h-96">
              <Image
                alt="gta v world"
                src={WorldImage}
                className="h-full w-full"
              ></Image>
            </div>
          </header>
        </section>

        <section className="">
          <h1 className="mb-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            أحصائيات ولف لاند
          </h1>
          <div className="container mx-auto flex flex-col justify-between gap-4 md:items-center lg:flex-row">
            {statsData.map(({ title, value, Icon }) => {
              return (
                <div
                  key={title}
                  className="flex h-full w-full rounded-md bg-root-100 p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-full items-center justify-center rounded-md bg-root-200 p-4">
                      <Icon className="h-10 w-10 text-primary"></Icon>
                    </div>
                    <div className="flex h-full flex-col items-start gap-2">
                      <h3 className="text-xl font-bold text-primary">
                        {title}
                      </h3>
                      <p className="text-xl font-semibold text-neutral-100">
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto" id="faqs-section">
          <div className="my-20 flex grid-flow-col grid-rows-2 flex-col gap-4 md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-1">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-5xl ">
                الاسئلة الشائعة
              </h2>
              <p>
                يمكنك الأن التواصل مع الدعم الفني في اى وقت فنحن نوفر لكم الدعم
                24 ساعة يومياً و7 ايام فى الأسبوع ويمكنك ايضاً الحصول على اى
                معلومات اضافية او استفسار من خلال زيارة الديسكورد والذهاب الى
                قناة (الدعم الفني) وافتح تذكرة وانتظر احد الموظفين الفنين!
              </p>
            </div>
            <Accordion.Root
              type="single"
              className="h-fit w-full rounded-md bg-root-100 md:col-span-2"
              defaultValue={faqs[1].title}
              collapsible={true}
            >
              {faqs.map(({ title, value }) => {
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
        </section>
      </main>
    </LayoutNoContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (process.env.NODE_ENV === "development")
    return {
      props: {
        currentMembers: "N/A",
        currentOnlineMembers: "N/A",
        currentActivatedMembers: "N/A",
        currentMods: "N/A",
        currentLockedMembers: "N/A",
        currentNotActivatedMembers: "N/A",
      },
    };

  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=21600, stale-while-revalidate=86400"
    );
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
      ],
    });
    await client.login(process.env.DISCORD_CLIENT_TOKEN);

    const guild = await client.guilds.fetch(process.env.DISCORD_GUILD_ID!);
    const activatedRole = await guild.roles.fetch(
      process.env.DISCORD_GUILD_ACTIVAITED_ROLE_ID!
    );
    const notActivatedRole = await guild.roles.fetch(
      process.env.DISCORD_GUILD_UNACTIVAITED_ROLE_ID!
    );
    const lockedRole = await guild.roles.fetch(
      process.env.DISCORD_GUILD_LOCKED_ROLE_ID!
    );

    const modsRole = await guild.roles.fetch(
      process.env.DISCORD_GUILD_MANAGMENT_ROLE_ID!
    );

    await guild.members.fetch({ force: true, withPresences: true });
    const currentMembers = guild.memberCount!;
    const currentOnlineMembers = guild.approximatePresenceCount!;
    const currenActivatedMembers = activatedRole?.members.size!;
    const currentMods = modsRole?.members.size!;
    const currentLockedMembers = lockedRole?.members.size!;
    const currentNotActivatedMembers = notActivatedRole?.members.size!;

    client.destroy();

    const formater = new Intl.NumberFormat();

    console.log({
      currentMembers: formater.format(currentMembers),
      currentOnlineMembers: formater.format(currentOnlineMembers),
      currentActivatedMembers: formater.format(currenActivatedMembers),
      currentMods: formater.format(currentMods),
      currentLockedMembers: formater.format(currentLockedMembers),
      currentNotActivatedMembers: formater.format(currentNotActivatedMembers),
    });

    return {
      props: {
        currentMembers: formater.format(currentMembers),
        currentOnlineMembers: formater.format(currentOnlineMembers),
        currentActivatedMembers: formater.format(currenActivatedMembers),
        currentMods: formater.format(currentMods),
        currentLockedMembers: formater.format(currentLockedMembers),
        currentNotActivatedMembers: formater.format(currentNotActivatedMembers),
      },
    };
  } catch {
    return {
      props: {
        currentMembers: "N/A",
        currentOnlineMembers: "N/A",
        currentActivatedMembers: "N/A",
        currentMods: "N/A",
        currentLockedMembers: "N/A",
        currentNotActivatedMembers: "N/A",
      },
    };
  }
};

/*
<div className="absolute w-screen -z-10">
				<Image
					alt="bg"
					className="w-full"
					src={YelloBackground}
				></Image>
			</div>
*/
