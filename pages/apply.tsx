import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Apply() {
	return (
		<>
			<Layout>
				<div className="bg-root-100 p-4 rounded-md mt-4">
					<div className="flex flex-col items-center justify-center gap-4">
						<h1 className="text-2xl font-bold">
							للمتابعة يرجى ربط حساب الديسكورد الخاص بك.
						</h1>
						<Link
							href={
								"https://discord.com/api/oauth2/authorize?client_id=1043232663877734461&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapply&response_type=code&scope=identify%20email%20guilds"
							}
							className={`py-2 px-4 bg-[#5865F2] rounded-full flex gap-2 items-center`}
						>
							<span>ربط مع الديسكورد</span>
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}

function Layout({ children }: any) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div>
				<Navbar></Navbar>
				<header className="bg-gradient-to-r from-primary to-root py-10">
					<div className="flex flex-col items-start gap-4 container mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							التقديم الاليكترونى
						</h1>
						<p className="text-neutral-100 max-w-2xl">
							يجب قرائة جميع القوانين اللازمة للانضمام لنا! تضمن
							القوانين العامة وقوانين الشرطة والعدل والاسعاف
							والرقابة
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
