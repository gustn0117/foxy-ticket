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
        primary: '#6366F1',
        'primary-dark': '#4F46E5',
        'primary-light': '#EEF2FF',
        accent: '#F59E0B',
        'accent-light': '#FEF3C7',
        kakao: '#FEE500',
        dark: '#18181B',
        'dark-sub': '#27272A',
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
