const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	// add this section
	content: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			letterSpacing: {
				content: '0.01em'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
