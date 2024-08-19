const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{vue,ts,js}'],
	plugins: [require('daisyui')],
	theme: {
		screens: {
			mobile: { max: '640px' },
			// => @media (min-width: 320px) { ... }

			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
}
