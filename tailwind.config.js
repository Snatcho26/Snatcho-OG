/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // App router
    "./pages/**/*.{js,ts,jsx,tsx}",        // Pages folder (API + legacy pages)
    "./components/**/*.{js,ts,jsx,tsx}",   // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
