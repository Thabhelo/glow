/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a1f35',
          900: '#0f1225',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'handlee': ['Handlee', 'cursive'],
      }
    },
  },
  plugins: [],
};