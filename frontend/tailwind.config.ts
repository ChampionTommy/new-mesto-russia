import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				default: 'inset 0 0 0 1px rgba(255, 255, 255, .02), 0 1px 3px rgba(0, 0, 0, .14)',
				hover: 'inset 0 0 0 1px rgba(255, 255, 255, .05), 0 1px 4px rgba(0, 0, 0, .22)',
			},
			willChange: {
				default: 'opacity,transform',
			},
			animation: {
				underlay: 'underlay .2s ease',
			},
			keyframes: {
				underlay: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
		},
	},

	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.container': {
					margin: '0 auto',
					width: '880px',
				},
				'.button': {
					display: 'inline-flex',
					alignItems: 'center',
					lineHeight: '1',
					fontWeight: '500',
					justifyContent: 'center',
					cursor: 'pointer',
					whiteSpace: 'nowrap',
					backgroundColor: '#2c2c2c',
					borderRadius: '10px',
					color: '#c9cccf',
					padding: '0 16px',
					height: '42px',
					boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, .02), 0 1px 3px rgba(0, 0, 0, .14)',
					'&:hover': {
						boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, .05), 0 1px 4px rgba(0, 0, 0, .22)',
					},
				},
				'.user': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					cursor: 'pointer',
					height: 'auto',
				},
				'.user-menu': {
					position: 'absolute',
					right: '492px',
					top: '85px',
					zIndex: '1',
				},
				'.account-menu': {
					width: '300px',
					backgroundColor: '#1f1f1f',
					boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0%), 0 0 0 1px rgba(54, 54, 54, 1)',
					borderRadius: '10px',
					padding: '12px 6px 8px',
				},
				'.card': {
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#232324',
					overflow: 'hidden',
					borderRadius: '10px',
				},
				'.modal-overlay': {
					position: 'fixed',
					zIndex: '11',
					left: '0',
					right: '0',
					top: '0',
					bottom: '0',
					backgroundColor: '#00000080',
					backdropFilter: 'blur(15px)',
					willChange: 'opacity',
					display: 'grid',
					overflow: 'hidden',
					gridTemplateRows: 'minmax(0,maxContent)',
					justifyContent: 'center',
					alignContent: 'center',
				},
				'.modal-window': {
					position: 'relative',
					display: 'grid',
					gridTemplateRows: '64px 1fr',
					backgroundColor: '#232324',
					borderRadius: '15px',
				},
				'.icon-button': {
					padding: '4px',
					color: '#969c9d',
					borderRadius: '100%',
					cursor: 'pointer',
					'&:hover': {
						backgroundColor: '#333333',
					},
				},
				'.app-logo': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.auth-button': {
					display: 'flex',
					borderRadius: '12px',
					padding: '12px 50px',
					fontSize: '17px',
					fontWeight: '500',
					lineHeight: '26px',
					backgroundColor: '#333333',
					color: '#c9cccf',
					marginBottom: '16px',
					textAlign: 'center',
					width: '100%',
					cursor: 'pointer',
					position: 'relative',
					alignItems: 'center',
					justifyContent: 'center',
					'&:hover': {
						backgroundColor: '#2c2c2c',
					},
				},
				'.field': {
					height: '42px',
					radius: '10px',
				},
				'.field__wrapper': {
					fontSize: '17px',
					lineHeight: '26px',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					width: '100%',
					height: '42px',
					paddingLeft: '11px',
					paddingRight: '11px',
					color: 'inherit',
					backgroundColor: '#2c2c2d',
					border: '1px solid #00000008',
					borderRadius: '10px',
					'&:hover': {
						backgroundColor: '#1e1d1e',
						borderColor: '#334e64',
						boxShadow: '0 0 0 3px #ffffff0f',
					},
				},
				'.profile-action': {
					display: 'block',
					width: '100%',
					height: '50px',
					fontSize: '17px',
					lineHeight: '26px',
				},
				'.profile-action__wrapper': {
					display: 'flex',
					alignItems: 'center',
					borderRadius: '8px',
					height: '100%',
					width: '100%',
					cursor: 'pointer',
					color: '#c9cccf',
					padding: '0 10px',
					'&:hover': {
						backgroundColor: '#313131',
					},
				},
				'.profile-action__icon': {
					marginRight: '15px',
				},
				'.editor': {
					width: '800px',
					maxWidth: '100%',
					borderRadius: '10px',
				},
			})
		}),
	],
}
export default config
