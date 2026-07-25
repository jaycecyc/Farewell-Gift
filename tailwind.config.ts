import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f1',
          100: '#ffebdf',
          200: '#ffd0b8',
          300: '#ffb48e',
          400: '#ff8a57',
          500: '#f86c39',
          600: '#dc4f20',
          700: '#ad3619',
          800: '#872916',
          900: '#611d12'
        }
      }
    }
  },
  plugins: []
};

export default config;
