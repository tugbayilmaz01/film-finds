/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				customBg: "#161718",
				inputBg: "#1C1D20",
				"main-purple": "#ceb3ff",
			},
		},
	},
	plugins: [],
};
