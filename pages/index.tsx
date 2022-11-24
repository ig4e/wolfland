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
			<main>
				<section className="relative bg-tri-y-clip">
					<header className="flex flex-col md:flex-row gap-8 items-center pb-12 pt-6 md:py-24 container mx-auto">
						<Image
							alt="logo"
							className="w-52 hidden md:block"
							src={Logo}
						></Image>
						<div className="flex flex-col items-start gap-4">
							<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
								سيرفر ولف لاند
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
									className="btn-primary-outline !px-6 flex items-center gap-2"
								>
									<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
									<span>القوانين</span>
								</Link>
							</div>
						</div>
					</header>
				</section>
				<section className="flex flex-col lg:flex-row md:items-center gap-4 justify-between container mx-auto my-6">
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
								عالم ولف لاند
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
									className="btn-secondary-outline !px-6 flex items-center gap-2"
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
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-16">
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
