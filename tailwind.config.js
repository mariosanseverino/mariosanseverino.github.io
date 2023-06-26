/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {},
		colors: {
			'black': '#141414',
			'white': '#c8c8c8',
		}
	},
	plugins: [],
	darkMode: 'class',
};
