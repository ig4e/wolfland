/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#CCA141",
				"primary-hover": "#9B7D38",
				"primary-active": "#756131",

				secondary: "#CB4041",
				"secondary-hover": "#843235",
				"secondary-active": "#49272A",

				root: "#13161B",
				"root-100": "#242529",
				"root-200": "#323337",

				neutral: "#FFFFFF",
				"neutral-100": "#DBD9D4",
				//"neutral-200": "#777777",
			},
			fontFamily: {
				cairo: "Cairo, sans-serif",
			},
			backgroundImage: {
				"yellow-tri": "url('/images/bg-yellow-tri.svg')",
			},
			container: {
				padding: "1rem",
			},
		},
	},
	plugins: [],
};
