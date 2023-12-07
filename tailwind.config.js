/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        darkblue: "#00243A",
        darkbluehover: "#003f66",
        lightblue: "#0090CF",
        lightbluehover: "#0081b8",
        backgroundgray: "#F6F7F8",
        backgrounddarkgray: "#D9D9D9",
        backgrounddarkgrayhover:"#bfbfbf",
        success: "#179708",
        danger: "#B10000",
      },
      fontFamily:{
        main: ['Chakra Petch', 'sans-serif'],
      },
    }
  },
  plugins: []
};