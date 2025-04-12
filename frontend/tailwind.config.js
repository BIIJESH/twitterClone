import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      {
        black: {
          primary: "rgb(29, 155, 240)",
          secondary: "rgb(24, 24, 24)",
          accent: "#1fb2a6",
          neutral: "#191D24",
          "base-100": "#000000",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
