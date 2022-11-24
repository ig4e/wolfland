import { Bars3Icon } from "@heroicons/react/24/outline";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../public/images/logo.svg";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
	const [navMenuOpen, setNavMenuOpen] = useState(false);
	useEffect(() => {
		const body = typeof window && document.getElementById("root");
		if (body) {
			body.style.overflow = navMenuOpen ? "hidden" : "auto";
		}
	}, [navMenuOpen]);

	return (
		<nav className="h-[55px] md:h-[75px] relative">
			<div className="fixed inset-x-0 top-0 bg-root opacity-90 backdrop-blur-lg h-[55px] md:h-[75px] flex items-center justify-center z-50">
				<div className="flex items-center justify-between container mx-auto">
					<Link href={"/"} className="flex items-center gap-2">
						<Image
							src={Logo}
							alt="brand logo"
							className="w-10 h-10"
						></Image>
						<h1 className="text-xl font-bold">وولف لاند</h1>
					</Link>
					<div className="hidden items-center gap-4 md:flex">
						<Link
							href={"/"}
							className="hover:text-white/80 active:text-white/60 items-center gap-2 transition hidden md:flex"
						>
							<HomeIcon className="h-5 w-5"></HomeIcon>
							<span>الرئيسية</span>
						</Link>
						<Link
							href={"/rules"}
							className="hover:text-white/80 active:text-white/60 flex items-center gap-2 transition"
						>
							<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
							<span>القوانين</span>
						</Link>
						<Link href={"/apply"} className="btn-primary">
							<span>أنضم لنا</span>
						</Link>
					</div>

					<button
						onClick={() => setNavMenuOpen(!navMenuOpen)}
						className="flex items-center justify-center p-1 hover:bg-root-100 active:bg-root-200 rounded-md transition md:hidden"
					>
						<Bars3Icon className="w-6 h-6 "></Bars3Icon>
					</button>
				</div>
			</div>
			<div className="fixed inset-x-0 top-0 backdrop-blur h-[55px] md:h-[75px] z-40"></div>

			<AnimatePresence>
				{navMenuOpen && (
					<motion.div
						initial={{ bottom: 0, opacity: 0 }}
						animate={{ top: 0, opacity: 1 }}
						exit={{
							bottom: 0,
							top: typeof window ? window.innerHeight : 900,
							opacity: 0,
						}}
						transition={{
							type: "spring",
							damping: 15,
							duration: 0.1,
						}}
						className="fixed inset-x-0 backdrop-blur-lg bg-root/95 z-40 flex flex-col items-center gap-4 container mx-auto justify-between"
					>
						<div className="w-full flex flex-col items-center gap-4">
							<div className="h-[55px] md:h-[75px]"></div>
							<Link
								onClick={() => setNavMenuOpen(!navMenuOpen)}
								href={"/"}
								className="hover:text-white/80 active:text-white/60 items-center gap-2 transition justify-center text-center flex w-full bg-root-100 hover:bg-root-200  py-2 rounded-full"
							>
								<HomeIcon className="h-5 w-5"></HomeIcon>
								<span>الرئيسية</span>
							</Link>
							<Link
								onClick={() => setNavMenuOpen(!navMenuOpen)}
								href={"/rules"}
								className="hover:text-white/80 active:text-white/60 flex items-center gap-2 text-center justify-center transition w-full bg-root-100 hover:bg-root-200 py-2 rounded-full"
							>
								<QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
								<span>القوانين</span>
							</Link>
						</div>

						<Link
							onClick={() => setNavMenuOpen(!navMenuOpen)}
							href={"/apply"}
							className="btn-primary text-center w-full self-end place-self-end mb-4"
						>
							<span>أنضم لنا</span>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

export default Navbar;
