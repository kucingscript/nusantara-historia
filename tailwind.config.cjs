/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["coffee", "forest"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/hero.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
