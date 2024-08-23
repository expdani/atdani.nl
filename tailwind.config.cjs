/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerBackground: "url('/images/background.webp')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
