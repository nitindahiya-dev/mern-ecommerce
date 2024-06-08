const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ['"Poppins"' , "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern-1': "url('./banner-1.jpg')",
        'hero-pattern-2': "url('./banner-2.jpg')",
        'hero-pattern-3': "url('./banner-3.jpg')",
      }
    },
  },
  plugins: [flowbite.plugin()],
};
