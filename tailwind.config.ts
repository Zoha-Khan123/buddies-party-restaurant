import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teaGreen: "#ccd5ae",
        beige: "#e9edc9",
        cornsilk: "#fefae0",
        papayaWhip: "#faedcd",
        buff: "#d4a373",
      },
    },
  },
  plugins: [],
};

export default config;
