import Head from "next/head";
import Image from "next/image";
import LayoutNoContainer from "../components/Layouts/LayoutNoContainer";
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

import YelloBackground from "../public/images/bg-yellow-tri.svg";
import Logo from "../public/images/logo.svg";

export default function Home() {
	return (
		<LayoutNoContainer>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className="bg-gradient-to-r from-primary to-root bg-cover bg-no-repeat tri-clip"
				style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)" }}
			>
				<header className="flex gap-4 items-center py-24 container mx-auto">
					<Image alt="logo" className="w-64" src={Logo}></Image>
					<div className="flex flex-col items-start gap-4">
						<h1 className="text-7xl font-bold">سيرفر ولف لاند</h1>
						<p className="text-neutral-100 max-w-2xl">
							اهلاً بك عزيزي في سيرفر وعالم وولف لاند، السيرفر
							الأفضل في عالم الحياه الواقعية والرول بلاي حيث
							الواقعية والمتعة يمكنك الآن ان تنضم الينا عبر
							التفعيل الإلكتروني بالموقع الخاص بنا في خدمتكم دائما
							وأبداً
						</p>
						<div className="flex items-center gap-4">
							<button className="btn-primary">
								<span>أنضم لنا</span>
							</button>
							<button className="btn-primary-outline !اpx-6 flex items-center gap-2">
								<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
								<span>القوانين</span>
							</button>
						</div>
					</div>
				</header>
			</div>
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
