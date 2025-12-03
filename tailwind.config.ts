import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4D7FFF',
          50: '#EFF4FF',
          100: '#DBE6FF',
          200: '#BED2FF',
          300: '#96B5FF',
          400: '#6D90FF',
          500: '#4D7FFF',
          600: '#2D5CFF',
          700: '#1A47E8',
          800: '#1638BC',
          900: '#183294',
        },
        secondary: {
          DEFAULT: '#1A1F3A',
          50: '#F7F8FA',
          100: '#ECEEF3',
          200: '#D5DAE7',
          300: '#B0B9D1',
          400: '#8592B8',
          500: '#64709F',
          600: '#4F5984',
          700: '#41476B',
          800: '#383D5A',
          900: '#1A1F3A',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;