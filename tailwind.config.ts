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
        primary: '#2563EB',
        'primary-dark': '#1E3A8A',
        'primary-light': '#EFF6FF',
        secondary: '#0EA5E9',
        'secondary-dark': '#0369A1',
        accent: '#F59E0B',
        'accent-light': '#FEF3C7',
        navy: '#0F1E3D',
        'navy-deep': '#0A1628',
        'navy-abyss': '#020617',
        gold: '#F59E0B',
        'gold-light': '#FCD34D',
        silver: '#CBD5E1',
        kakao: '#FEE500',
        dark: '#0A1628',
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #0EA5E9 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A1628 0%, #1E3A8A 50%, #2563EB 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #B45309 100%)',
        'mesh-navy': 'radial-gradient(at 20% 20%, #1E3A8A 0px, transparent 50%), radial-gradient(at 80% 0%, #2563EB 0px, transparent 50%), radial-gradient(at 0% 80%, #0EA5E9 0px, transparent 50%), radial-gradient(at 80% 80%, #0A1628 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
