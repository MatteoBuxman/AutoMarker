/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        darkblue: "#00243A",
        lightblue: "#0090CF",
        lightbluehover: "#4dA5C4",
        backgroundgray: "#F6F7F8",
        backgrounddarkgray: "#D9D9D9",
        success: "#179708",
        danger: "#B10000",
      }
    }
  },
  plugins: []
};