import Image from "next/image";
import React from "react";

import Logo from "../public/images/logo.svg";

function Navbar() {
	return (
		<nav className="h-[75px]">
			<div className="fixed inset-x-0 top-0 bg-root opacity-80 backdrop-blur-sm h-[75px] py-4">
				<div className="flex items-center justify-between container mx-auto">
					<div className="flex items-center gap-2">
						<Image src={Logo} alt="brand logo" className="w-10 h-10"></Image>
                        <h1 className="text-xl font-bold">ولف لاند</h1>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
