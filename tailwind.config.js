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
			'white': '#C8C8C8',
			'HTML': '#FB923C',
			'CSS': '#0EA5E9',
			'JavaScript': '#FACC14'
		}
	},
	plugins: [],
	darkMode: 'class',
};
