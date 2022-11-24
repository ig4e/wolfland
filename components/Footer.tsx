import Image from "next/image";
import React from "react";
import Logo from "../public/images/logo.svg";

function Footer() {
	return (
		<footer className="mt-8">
			<div className="bg-gradient-to-r from-primary to-root py-6">
				<div className="flex flex-col gap-4 md:flex-row items-center justify-between container mx-auto">
					<h1 className="text-4xl font-bold text-center">
						تواصل معنا
					</h1>

					<div className="flex items-center gap-4">
						<a
							target={"_blank"}
							rel={"noreferrer"}
							href={"https://discord.gg/wol"}
							className="bg-[#5865F2] p-2 px-4 md:px-6 rounded-full flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 md:w-8 md:h-8 text-white"
								viewBox="0 0 60 46"
							>
								<defs>
									<clipPath id="clip-path">
										<rect
											id="Rectangle_16"
											data-name="Rectangle 16"
											width="60"
											height="46"
											fill="#fff"
										/>
									</clipPath>
								</defs>
								<g
									id="discord-mark-white"
									clipPath="url(#clip-path)"
								>
									<path
										id="Path_13"
										data-name="Path 13"
										d="M50.58,4.187A49.271,49.271,0,0,0,38.418.415a.185.185,0,0,0-.2.092,34.322,34.322,0,0,0-1.514,3.111,45.487,45.487,0,0,0-13.66,0A31.479,31.479,0,0,0,21.511.507a.192.192,0,0,0-.2-.092A49.134,49.134,0,0,0,9.154,4.187a.174.174,0,0,0-.08.069C1.328,15.828-.794,27.116.247,38.264a.205.205,0,0,0,.078.14,49.547,49.547,0,0,0,14.92,7.542.193.193,0,0,0,.21-.069,35.412,35.412,0,0,0,3.052-4.965.189.189,0,0,0-.1-.263,32.629,32.629,0,0,1-4.661-2.221.192.192,0,0,1-.019-.318c.313-.235.627-.479.926-.725a.185.185,0,0,1,.193-.026,35.334,35.334,0,0,0,30.027,0,.184.184,0,0,1,.2.024c.3.247.612.493.928.728a.192.192,0,0,1-.016.318,30.618,30.618,0,0,1-4.663,2.219.191.191,0,0,0-.1.266,39.762,39.762,0,0,0,3.05,4.962.189.189,0,0,0,.21.071A49.383,49.383,0,0,0,59.414,38.4a.192.192,0,0,0,.078-.138A50.1,50.1,0,0,0,50.658,4.258.152.152,0,0,0,50.58,4.187ZM19.966,31.476c-2.944,0-5.37-2.7-5.37-6.022s2.379-6.022,5.37-6.022c3.014,0,5.417,2.726,5.37,6.022C25.336,28.773,22.957,31.476,19.966,31.476Zm19.853,0c-2.944,0-5.37-2.7-5.37-6.022s2.379-6.022,5.37-6.022c3.015,0,5.417,2.726,5.37,6.022C45.189,28.773,42.834,31.476,39.82,31.476Z"
										transform="translate(0 -0.065)"
										fill="#fff"
									/>
								</g>
							</svg>

							<span className="font-semibold md:text-lg">
								ديسكورد
							</span>
						</a>
						<a
							target={"_blank"}
							rel={"noreferrer"}
							href={
								"https://youtube.com/channel/UCALiEPxic7NElSYOwh6WXYA"
							}
							className="bg-red-600 p-2 px-4 md:px-6 rounded-full flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 md:w-8 md:h-8"
								viewBox="0 0 60 42.002"
							>
								<g
									id="YouTube_Logo_2017"
									transform="translate(-381 158)"
								>
									<g
										id="Group_17"
										data-name="Group 17"
										transform="translate(381 -158)"
									>
										<path
											id="Path_14"
											data-name="Path 14"
											d="M58.745,6.559a7.514,7.514,0,0,0-5.3-5.3C48.764,0,30,0,30,0S11.236,0,6.559,1.255a7.514,7.514,0,0,0-5.3,5.3C0,11.236,0,21,0,21s0,9.765,1.255,14.442a7.513,7.513,0,0,0,5.3,5.3C11.236,42,30,42,30,42s18.764,0,23.441-1.255a7.513,7.513,0,0,0,5.3-5.3C60,30.766,60,21,60,21S59.995,11.236,58.745,6.559Z"
											transform="translate(0 0)"
											fill="#fff"
										/>
										<path
											id="Path_15"
											data-name="Path 15"
											d="M65.3,59.66l23.382-13.5L65.3,32.663Z"
											transform="translate(-45.513 -25.16)"
											fill="red"
										/>
									</g>
								</g>
							</svg>

							<span className="font-semibold text-lg">
								يوتيوب
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className="bg-root py-6 flex items-center justify-between container mx-auto">
				<Image
					src={Logo}
					alt="brand logo"
					className="w-10 h-10"
				></Image>
				<h1 dir="ltr">© 2022 Wolfland Rp. <span className="text-primary text-sm">By Ahmed Mohamed</span></h1>
			</div>
		</footer>
	);
}

export default Footer;
