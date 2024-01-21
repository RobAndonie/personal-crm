/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // adjust this if you're using TypeScript or different file structures
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#B744B8",
        secondary: "#2C83E3",
        neutral: "#8D8D8D",
        darkNeutral: "#333333",
      },
    },
  },
  plugins: [],
};
