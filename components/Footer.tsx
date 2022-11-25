import Image from "next/image";
import React from "react";
import Logo from "../public/images/logo.svg";

function Footer() {
  const soicals = [
    {
      name: "ديسكورد",
      color: "#5865F2",
      url: "https://discord.gg/wol",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white md:h-8 md:w-8"
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
          <g id="discord-mark-white" clipPath="url(#clip-path)">
            <path
              id="Path_13"
              data-name="Path 13"
              d="M50.58,4.187A49.271,49.271,0,0,0,38.418.415a.185.185,0,0,0-.2.092,34.322,34.322,0,0,0-1.514,3.111,45.487,45.487,0,0,0-13.66,0A31.479,31.479,0,0,0,21.511.507a.192.192,0,0,0-.2-.092A49.134,49.134,0,0,0,9.154,4.187a.174.174,0,0,0-.08.069C1.328,15.828-.794,27.116.247,38.264a.205.205,0,0,0,.078.14,49.547,49.547,0,0,0,14.92,7.542.193.193,0,0,0,.21-.069,35.412,35.412,0,0,0,3.052-4.965.189.189,0,0,0-.1-.263,32.629,32.629,0,0,1-4.661-2.221.192.192,0,0,1-.019-.318c.313-.235.627-.479.926-.725a.185.185,0,0,1,.193-.026,35.334,35.334,0,0,0,30.027,0,.184.184,0,0,1,.2.024c.3.247.612.493.928.728a.192.192,0,0,1-.016.318,30.618,30.618,0,0,1-4.663,2.219.191.191,0,0,0-.1.266,39.762,39.762,0,0,0,3.05,4.962.189.189,0,0,0,.21.071A49.383,49.383,0,0,0,59.414,38.4a.192.192,0,0,0,.078-.138A50.1,50.1,0,0,0,50.658,4.258.152.152,0,0,0,50.58,4.187ZM19.966,31.476c-2.944,0-5.37-2.7-5.37-6.022s2.379-6.022,5.37-6.022c3.014,0,5.417,2.726,5.37,6.022C25.336,28.773,22.957,31.476,19.966,31.476Zm19.853,0c-2.944,0-5.37-2.7-5.37-6.022s2.379-6.022,5.37-6.022c3.015,0,5.417,2.726,5.37,6.022C45.189,28.773,42.834,31.476,39.82,31.476Z"
              transform="translate(0 -0.065)"
              fill="#fff"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "تويتر",
      color: "#1d9bf2",
      url: "https://twitter.com/wolflandrp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Logo"
          x="0px"
          y="0px"
          viewBox="0 0 248 204"
          className="h-6 w-6 text-white"
        >
          <g id="Logo_1_">
            <path
              className="fill-current text-white"
              d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
            />
          </g>
        </svg>
      ),
    },

    {
      name: "تيك توك",
      color: "black",
      url: "https://www.tiktok.com/@wolflandrp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 512 512"
          id="icons"
        >
          <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
        </svg>
      ),
    },

    {
      name: "يوتيوب",
      color: "red",
      url: "https://youtube.com/channel/UCALiEPxic7NElSYOwh6WXYA",
      icon: (
        <svg
          id="Group_17"
          data-name="Group 17"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 60 42.002"
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
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-8">
      <div className="bg-gradient-to-r from-primary to-root py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <h1 className="text-center text-4xl font-bold">حسابات وولف لاند</h1>

          <div className="grid grid-flow-col grid-rows-2 gap-4 md:grid-rows-1">
            {soicals.map((social) => (
              <a
                key={social.name}
                target={"_blank"}
                rel={"noreferrer"}
                href={social.url}
                className={`flex w-full select-none items-center gap-2 rounded-full py-2 px-6 text-center md:px-6 md:text-left`}
                style={{ backgroundColor: social.color }}
              >
                {social.icon}
                <span className="w-full place-self-center self-center whitespace-nowrap text-center font-semibold md:text-lg">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between bg-root py-6">
        <Image src={Logo} alt="brand logo" className="h-10 w-10"></Image>
        <div dir="ltr" className="flex flex-col md:flex-row md:items-end md:gap-1">
          <h1>© 2022 Wolfland Rp.</h1>
          <span className="text-sm text-primary">By Ahmed Mohamed</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
