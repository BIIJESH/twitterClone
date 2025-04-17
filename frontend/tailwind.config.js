import daisyui from "daisyui";
import daisyUIThemes from "daisyui/theme";

/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          extend: {
               colors: {
                    blue: "#1DA1F2",
                    blueDark: "#1A91DA",
                    blueDarker: "#1681BF",
                    black: "#14171A",
                    darkGray: "#657786",
                    lightGray: "#AAB8C2",
                    xlightGray: "#E1E8ED",
                    xxlightGray: "#F5F8FA",
                    red: "#E0245E",
                    green: "#17BF63",
                    yellow: "#FFAD1F",
                    purple: "#794BC4",
                    orange: "#F45D22",
               },
          },
     },
     plugins: [daisyui],
     daisyui: {
          themes: [
               "dark",
               {
                    black: {
                         ...daisyUIThemes["black"],
                         primary: "rgb(29, 155, 240)",
                         secondary: "rgb(24, 24, 24)",
                         //3 13 12
                    },
               },
          ],
     },
};
