import Head from "next/head";
import Image from "next/image";
import LayoutNoContainer from "../components/Layouts/LayoutNoContainer";
import {
  BoltIcon,
  QuestionMarkCircleIcon,
  PhoneArrowDownLeftIcon,
  ShieldCheckIcon,
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
  currentOnlineActivatedMembers: string;
}

const Home: NextPage<IPageProps> = ({
  currentActivatedMembers,
  currentMembers,
  currentOnlineActivatedMembers,
  currentOnlineMembers,
}) => {
  const cardsData = [
    {
      title: `الدعم الفنى`,
      desc: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
			المقروء لصفحة ما سيلهي القارئ عن التركيز على
			الشكل الخارجي للنص أو شكل توضع الفقرات في`,
      Icon: PhoneArrowDownLeftIcon,
    },
    {
      title: `الحماية`,
      desc: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
			المقروء لصفحة ما سيلهي القارئ عن التركيز على
			الشكل الخارجي للنص أو شكل توضع الفقرات في`,
      Icon: ShieldCheckIcon,
    },
    {
      title: `السرعة`,
      desc: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
			المقروء لصفحة ما سيلهي القارئ عن التركيز على
			الشكل الخارجي للنص أو شكل توضع الفقرات في`,
      Icon: BoltIcon,
    },
  ];

  const statsData = [
    {
      title: `الأعضاء الحاليين`,
      value: `${currentMembers}+`,
      Icon: PhoneArrowDownLeftIcon,
    },
    {
      title: `الأعضاء المفعلين`,
      value: `${currentActivatedMembers}+`,
      Icon: PhoneArrowDownLeftIcon,
    },
    {
      title: `عدد اللأعبين اليوم`,
      value: `${currentOnlineActivatedMembers}+`,
      Icon: PhoneArrowDownLeftIcon,
    },
  ];

  const faqs = [
    {
      title: `لدي مشكلة فى التقديم !`,
      value: `اذا كان لديك مشكلة فى التقديم فقط يمكنك ان تتواصل معانا عبر نموذج الأتصال بنا واذا كان مشكلتك تحتاج الى التواصل المباشر سيتم استدعائك للتواصل مع احد موظفي الدعم الفني لمحاولة حل مشكلتك في اسرع وقت`,
    },
    {
      title: `اريد ان اتعلم صناعة المحتوى !`,
      value: `نحن نعمل بحهد للوصول الى اكبر عدد ممكن من صناع المحتوى فى مدينة ريسبكت ولكن هذا يتطلب منك الكثير من المجهود والعمل لكي تستطيع ان تحصل على متابعين ولكننا سنقدم لك كل الحلول لكي تستطيع البداء فى صناعة المحتوى فقط حاول ان تكون مفعل لدينا حتي نستطيع مساعدتك.`,
    },
    {
      title: `هل يمكن ان انضم الى فرق العمل؟`,
      value: `بالتأكيد يمكنك الأنضمام الينا فى أدارة ريسبكت ولكن يجب ان تتوفر بك بعض المميزات لكي تستطيع ان تقدم المساعده كاملة لجميع اللاعبين فقط يجب ان تكون مفعل لدينا لكي تحصل على المعلومات الكاملة لكي تكون من ضمن ادارة سيرفر ريسبكت.`,
    },
    {
      title: `هل يمكن ان تساعدني في صناعة المحتوى؟`,
      value: `بالتأكيد نستطيع ان نساعدك فى كل مهام صناعة المحتوى ولك الدعم الكامل فى صناعة المحتوى ولكن فقط ان تكون مفعل لدينا وان تكون مستعد للأنطلاق وان يكون لديك كل المقاومات لكي تصبح صانع محتوى ونحن معاك دائماً وسنكون دائماً داعمين لك سواء ان كان فى البث المباشر او فى قنوات اليوتيوب.`,
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
        <section className="container mx-auto flex flex-col justify-between gap-4 md:items-center lg:flex-row">
          {cardsData.map(({ title, desc, Icon }) => {
            return (
              <div
                key={title}
                className="flex h-full rounded-md bg-root-100 p-4"
              >
                <div className="flex gap-4">
                  <div className="flex h-full items-center justify-center rounded-md bg-root-200 p-4">
                    <Icon className="h-20 w-20 text-primary"></Icon>
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
        <section className="bg-tri-r-clip relative">
          <header className="container mx-auto flex flex-col-reverse items-center justify-center gap-6 py-24 md:flex-row md:justify-between">
            <div className="flex h-full flex-col items-center gap-6 text-center md:items-start md:text-right">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl ">
                عالم وولف لاند
              </h1>
              <p className="max-w-2xl text-neutral-100">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
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
                      <Icon className="h-10 w-10"></Icon>
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

        <section className="container mx-auto">
          <div className="my-20 flex grid-flow-col grid-rows-2 flex-col gap-4 md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-1">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-5xl ">
                الاسئلة الشائعة
              </h2>
              <p>
                يمكنك الأن التواصل مع الدعم الفني في اى وقت فنحن نوفر لكم الدعم
                24 ساعة يومياً و7 ايام فى الأسبوع ويمكنك ايضاً الحصول على اى
                معلومات اضافية او استفسار من خلال زيارة الديسكورد او استخدام
                الأتصال بنا في اى وقت تراة مناسب لك
              </p>
            </div>
            <Accordion.Root
              type="single"
              className="w-full rounded-md bg-root-100 md:col-span-2"
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
        currentOnlineActivatedMembers: "N/A",
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
    const guild = await client.guilds.fetch("920413638441967656");
    const activatedRole = await guild.roles.fetch("1039937716063850526");
    const notActivatedRole = await guild.roles.fetch("1039937716768481362");
    const lockedRole = await guild.roles.fetch("1039937739212202024");
    await guild.members.fetch({ force: true, withPresences: true });
    const currentMembers = guild.memberCount!;
    const currentOnlineMembers = guild.approximatePresenceCount!;
    const currenActivatedMembers = activatedRole?.members.size!;
    const currentOnlineActivatedMembers = activatedRole?.members.filter(
      (user) => user.presence?.status !== "offline"
    ).size!;
    const currentLockedMembers = lockedRole?.members.size!;
    const currentNotActivatedMembers = notActivatedRole?.members.size!;
    
    client.destroy();

    const formater = new Intl.NumberFormat();

    console.log({
      currentMembers: formater.format(currentMembers),
      currentOnlineMembers: formater.format(currentOnlineMembers),
      currentActivatedMembers: formater.format(currenActivatedMembers),
      currentOnlineActivatedMembers: formater.format(
        currentOnlineActivatedMembers
      ),
      currentLockedMembers: formater.format(currentLockedMembers),
      currentNotActivatedMembers: formater.format(currentNotActivatedMembers),
    });

    return {
      props: {
        currentMembers: formater.format(currentMembers),
        currentOnlineMembers: formater.format(currentOnlineMembers),
        currentActivatedMembers: formater.format(currenActivatedMembers),
        currentOnlineActivatedMembers: formater.format(
          currentOnlineActivatedMembers
        ),
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
        currentOnlineActivatedMembers: "N/A",
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
