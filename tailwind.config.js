/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		dark: {
			bg: {
				37: '#373737'
			}
		},
		light: {
			textColor: {
				37: '#373737'
			}
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
};

