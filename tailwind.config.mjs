/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        terminal: {
          bg:      '#0e0d0b',
          surface: '#171513',
          border:  '#ece8df14',
          green:   '#a6f55b',
          cyan:    '#7cc4ff',
          yellow:  '#f5a05b',
          red:     '#f85149',
          muted:   '#8a8270',
          text:    '#ece8df',
          soft:    '#bdb6a6',
          dark:    '#0a0908',
        },
      },
      animation: {
        blink:      'tm-blink 1s steps(1) infinite',
        'live-dot': 'tm-pulse 1.8s ease-out infinite',
        marquee:    'tm-marquee 50s linear infinite',
        'grow-bar': 'tm-grow .9s cubic-bezier(.2,.7,.2,1) both',
        'route-in': 'route-enter .35s cubic-bezier(.2,.7,.2,1) both',
        'fade-up':  'tm-fade-in .5s cubic-bezier(.2,.7,.2,1) both',
      },
      keyframes: {
        'tm-blink':   { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        'tm-pulse':   { '0%,100%': { boxShadow: '0 0 0 0 #a6f55b80' }, '50%': { boxShadow: '0 0 0 6px #a6f55b00' } },
        'tm-marquee': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'tm-grow':    { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } },
        'route-enter':{ from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
        'tm-fade-in': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
};
