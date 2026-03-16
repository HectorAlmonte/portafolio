/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#30363d',
          green: '#39d353',
          cyan: '#58a6ff',
          yellow: '#e3b341',
          red: '#f85149',
          muted: '#8b949e',
          text: '#c9d1d9',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        typewriter: 'typewriter 0.5s steps(20) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        fadeIn: { from: { opacity: 0, transform: 'translateY(10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
