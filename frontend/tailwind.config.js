const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            openSans: ["var(--font-openSans)", ...fontFamily.sans],
            robotoCondensed: [
               "var(--font-roboto-condensed)",
               ...fontFamily.sans,
            ],
         },
      },
   },
};
