/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainColor: "#161718",
				lightColor: "#1C1D20",
				"main-purple": "#ceb3ff",
			},
		},
	},
	plugins: [],
};
