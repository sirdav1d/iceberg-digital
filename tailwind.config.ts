/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					green: {
						50: '#F7FCFC',
						100: '#E2EEED',
						200: '#B9D1D0',
						300: '#7AA6A4',
						400: '#518986',
						500: '#276C69',
						600: '#1F5654',
						700: '#17413F',
						800: '#102B2A',
						900: '#0C2020',
						950: '#081615',
					},
					yellow: {
						50: '#FEFFED',
						100: '#FCFFDB',
						200: '#F9FFB7',
						300: '#F7FF93',
						400: '#F4FF6F',
						500: '#F1FF4B',
						600: '#C1CD3C',
						700: '#929B2D',
						800: '#62681E',
						900: '#33360F',
						950: '#1B1D08',
					},
					gold: {
						500: '#FFE600',
						400: '#FFF064',
					},
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	presets: [require('@relume_io/relume-tailwind')],
	plugins: [require('tailwindcss-animate')],
};
export default config;
