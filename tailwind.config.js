/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    colors: {
      prime: "#1759D7",
      second: "#22C58B",
      tersier: "#E5E9F2",
      white: "#F6F8FD",
      deep: "#181230",
      primebase: "#457adf",
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: false,
  },
};
