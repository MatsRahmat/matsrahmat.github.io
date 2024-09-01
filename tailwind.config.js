/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Sans", "sans-serif"],
    },
    extend: {
      animation: {
        "slide-down": "slide-down 500ms linear",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-5rem)" },
          "100%": { transform: "translateY(0)" },
        },
        fade: {
          "0%": { transform: "translateY(-5rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
