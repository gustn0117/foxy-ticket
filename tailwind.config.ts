import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EC4899',
        'primary-dark': '#DB2777',
        'primary-light': '#FCE7F3',
        secondary: '#A855F7',
        'secondary-dark': '#7C3AED',
        'secondary-light': '#F3E8FF',
        accent: '#C084FC',
        kakao: '#FEE500',
        dark: '#1A0B2E',
        'dark-sub': '#2D1B4E',
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #EC4899 0%, #A855F7 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #FCE7F3 0%, #F3E8FF 100%)',
      },
    },
  },
  plugins: [],
}
export default config
