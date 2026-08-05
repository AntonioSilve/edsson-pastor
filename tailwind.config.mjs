/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: {
					white: '#FAF8F5',
					warm: '#F0EDE8',
				},
				text: {
					primary: '#2C2A28',
					secondary: '#6B6560',
				},
				accent: {
					DEFAULT: '#7D6B5F',
					hover: '#5C4F46',
					light: '#E8E0D9',
				},
				success: '#4A6B4F',
				error: '#8B4A4A',
				footer: {
					bg: '#2C2A28',
					text: '#D4CFC9',
				},
			},
			fontFamily: {
				display: ['"DM Sans"', 'sans-serif'],
				body: ['"Lora"', 'serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			fontSize: {
				logo: ['24px', { lineHeight: '1.15' }],
				hero: ['56px', { lineHeight: '1.05' }],
				h1: ['40px', { lineHeight: '1.15' }],
				h2: ['32px', { lineHeight: '1.2' }],
				h3: ['20px', { lineHeight: '1.4' }],
				body: ['18px', { lineHeight: '1.7' }],
				small: ['14px', { lineHeight: '1.5' }],
				caption: ['12px', { lineHeight: '1.5' }],
			},
			spacing: {
				section: '120px',
				component: '48px',
				element: '24px',
				tight: '12px',
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '16px',
			},
			boxShadow: {
				sm: '0 1px 3px rgba(44,42,40,0.04)',
				md: '0 4px 12px rgba(44,42,40,0.08)',
				header: '0 2px 20px rgba(44,42,40,0.06)',
			},
			transitionDuration: {
				fast: '200ms',
				base: '300ms',
				slow: '500ms',
			},
		},
	},
	plugins: [],
};