/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['rubik', 'sans-serif']
      },
      backgroundImage: {
        greenlight: ["linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)"],
        italicblue:["linear-gradient(134deg, #0076BE 11.95%, #95D8EB 100%))"],
    },
    },
  },

  plugins: [],
}

