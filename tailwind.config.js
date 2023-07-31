/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
		},
		colors: {
			'black': '#141414',
			'white': '#C8C8C8',
			'gray': '#323232',
			'HTML5': '#EF4444',
			'CSS3': '#0EA5E9',
			'JavaScript': '#FACC14'
		}
	},
	plugins: [],
	darkMode: 'class',
};
