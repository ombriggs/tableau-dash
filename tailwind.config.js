/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'eko-blue': '#005A76',
				'eko-orange': '#DD4D29',
				'eko-green': '#C4DA2F'
				// "eko-light-blue": "rgb(58, 105, 129)",
				// "eko-gray": "rgb(122, 135, 151)",
			}
		}
	},
	plugins: []
};
