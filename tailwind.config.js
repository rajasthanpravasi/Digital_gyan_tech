/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F2233',
        muted: '#4A5468',
        coral: '#F26A3D',
        teal: '#22B5C4',
        tealDark: '#0B6B75',
        tealTint: '#EAF7F8',
        ivory: '#F7F5F1',
        line: '#E8E4DB',
        white: '#FFFFFF',
        peach: '#F6E3D3',
        tealSoft: '#D6EFF2',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        logo: ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(42px, 6vw, 76px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['clamp(34px, 4.2vw, 54px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        card: '0 20px 40px -32px rgba(15,34,51,.35)',
        lift: '0 24px 48px -30px rgba(15,34,51,.45)',
        coral: '0 14px 30px -12px rgba(242,106,61,.55)',
      },
      screens: {
        lg: '960px',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.35' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
