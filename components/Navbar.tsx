import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../public/images/logo.svg";

function Navbar() {
	return (
		<nav className="h-[75px] relative">
			<div className="fixed inset-x-0 top-0 bg-root opacity-90 backdrop-blur-lg h-[75px] py-4 z-50">
				<div className="flex items-center justify-between container mx-auto">
					<Link href={"/"} className="flex items-center gap-2">
						<Image
							src={Logo}
							alt="brand logo"
							className="w-10 h-10"
						></Image>
						<h1 className="text-xl font-bold">ولف لاند</h1>
					</Link>
					<div className="flex items-center gap-4">
						<Link href={"/rules"} className="hover:text-white/80 active:text-white/60 flex items-center gap-2 transition">
							<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
							<span>القوانين</span>
						</Link>
						<Link href={"/apply"} className="btn-primary">
							<span>أنضم لنا</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="fixed inset-x-0 top-0 backdrop-blur-lg h-[75px] z-40"></div>
		</nav>
	);
}

export default Navbar;
