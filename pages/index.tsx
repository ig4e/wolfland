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

export default function Home() {
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
			value: `61,892+`,
			Icon: PhoneArrowDownLeftIcon,
		},
		{
			title: `الأعضاء المفعلين`,
			value: `86,258+`,
			Icon: PhoneArrowDownLeftIcon,
		},
		{
			title: `عدد اللأعبين اليوم`,
			value: `1,595+`,
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
				<section className="relative bg-tri-y-clip">
					<header className="flex flex-col md:flex-row gap-8 items-center pb-12 pt-6 md:py-24 container mx-auto">
						<Image
							alt="logo"
							className="w-52 hidden md:block"
							src={Logo}
						></Image>
						<div className="flex flex-col items-start gap-4">
							<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
								سيرفر وولف لاند
							</h1>
							<p className="text-neutral-100 max-w-2xl">
								اهلاً بك عزيزي في سيرفر وعالم وولف لاند، السيرفر
								الأفضل في عالم الحياه الواقعية والرول بلاي حيث
								الواقعية والمتعة يمكنك الآن ان تنضم الينا عبر
								التفعيل الإلكتروني بالموقع الخاص بنا في خدمتكم
								دائما وأبداً
							</p>
							<div className="flex items-center gap-4">
								<Link href="/apply" className="btn-primary">
									<span>أنضم لنا</span>
								</Link>
								<Link
									href="/rules"
									className="btn-primary-outline md:!px-6 flex items-center gap-2"
								>
									<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
									<span>القوانين</span>
								</Link>
							</div>
						</div>
					</header>
				</section>
				<section className="flex flex-col lg:flex-row md:items-center gap-4 justify-between container mx-auto">
					{cardsData.map(({ title, desc, Icon }) => {
						return (
							<div
								key={title}
								className="flex h-full p-4 bg-root-100 rounded-md"
							>
								<div className="flex gap-4">
									<div className="h-full bg-root-200 p-4 rounded-md flex justify-center items-center">
										<Icon className="h-20 w-20 text-primary"></Icon>
									</div>
									<div className="flex flex-col gap-2 h-full items-start">
										<h3 className="text-primary font-bold text-xl">
											{title}
										</h3>
										<p className="text-neutral-100">
											{desc}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</section>
				<section className="relative bg-tri-r-clip">
					<header className="py-24 container mx-auto flex flex-col-reverse gap-6 justify-center md:flex-row items-center md:justify-between">
						<div className="flex h-full gap-6 flex-col items-center text-center md:text-right md:items-start">
							<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
								عالم وولف لاند
							</h1>
							<p className="text-neutral-100 max-w-2xl">
								هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
								المقروء لصفحة ما سيلهي القارئ عن التركيز على
								الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
								التي يقرأها. ولذلك يتم استخدام طريقة لوريم
								إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما-
								للأحرف عوضاً عن
							</p>
							<div className="flex items-center gap-4">
								<Link href="/apply" className="btn-secondary">
									<span>أنضم لنا</span>
								</Link>
								<Link
									href="/rules"
									className="btn-secondary-outline md:!px-6 flex items-center gap-2"
								>
									<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
									<span>القوانين</span>
								</Link>
							</div>
						</div>
						<div className="md:h-96 w-auto">
							<Image
								alt="gta v world"
								src={WorldImage}
								className="w-full h-full"
							></Image>
						</div>
					</header>
				</section>

				<section className="">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
						أحصائيات ولف لاند
					</h1>
					<div className="flex flex-col lg:flex-row md:items-center gap-4 justify-between container mx-auto">
						{statsData.map(({ title, value, Icon }) => {
							return (
								<div
									key={title}
									className="flex h-full p-4 bg-root-100 rounded-md w-full"
								>
									<div className="flex gap-4">
										<div className="h-full bg-root-200 p-4 rounded-md flex justify-center items-center">
											<Icon className="h-10 w-10"></Icon>
										</div>
										<div className="flex flex-col gap-2 h-full items-start">
											<h3 className="text-primary font-bold text-xl">
												{title}
											</h3>
											<p className="text-neutral-100 font-semibold text-xl">
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
					<div className="flex flex-col md:grid grid-flow-col md:grid-flow-row grid-rows-2 md:grid-rows-1 md:grid-cols-3 my-20 gap-4">
						<div className="space-y-4">
							<h2 className="text-4xl md:text-5xl lg:text-5xl font-bold ">
								الاسئلة الشائعة
							</h2>
							<p>
								يمكنك الأن التواصل مع الدعم الفني في اى وقت فنحن
								نوفر لكم الدعم 24 ساعة يومياً و7 ايام فى الأسبوع
								ويمكنك ايضاً الحصول على اى معلومات اضافية او
								استفسار من خلال زيارة الديسكورد او استخدام
								الأتصال بنا في اى وقت تراة مناسب لك
							</p>
						</div>
						<Accordion.Root
							type="single"
							className="bg-root-100 rounded-md w-full md:col-span-2"
							collapsible={true}
						>
							{faqs.map(({ title, value }) => {
								return (
									<Accordion.Item
										key={title}
										value={title}
										className="overflow-hidden"
									>
										<Accordion.Header className="bg-root-100 rounded-md">
											<Accordion.Trigger className="AccordionTrigger flex items-center justify-between w-full py-2 px-4 bg-root-100 hover:bg-root-200/25 rounded-md">
												<span>{title}</span>
												<ChevronDownIcon className="AccordionChevron h-5 w-5"></ChevronDownIcon>
											</Accordion.Trigger>
										</Accordion.Header>
										<Accordion.Content className="overflow-hidden bg-root-200 text-neutral-100 px-4 AccordionContent">
											<p
												className="py-2"
												dangerouslySetInnerHTML={{
													__html: value
														.replaceAll(
															"\n",
															"<br/>",
														)
														.trim(),
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
}

/*
<div className="absolute w-screen -z-10">
				<Image
					alt="bg"
					className="w-full"
					src={YelloBackground}
				></Image>
			</div>
*/
