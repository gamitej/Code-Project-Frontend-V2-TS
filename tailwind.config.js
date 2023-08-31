/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#111b21",
        lightText: "#D1D6D8",
        mediumText: "#4C585F",
        darkText: "#2A3942",
        darkCard: "#202C33",
        // other theme color
        pink: "#ff8fab",
        green: "#80ed99",
        brown: "#e9c46a",
        purple: "#ea9ab2",
        skyBlue: "#219ebc",
        mustard: "#fb8500",
        mahandi: "#90a955",
        navyBlue: "#0077b6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
