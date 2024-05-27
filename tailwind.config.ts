import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      brand: "#005f04",
      tertiary: {
        "100": "#fff5e5",
        "200": "#ffe1b3",
        "300": "#ffcd80",
        "400": "#ffb84d",
        "500": "#ffa41a",
        "600": "#e68b00",
        "700": "#b36c00",
        "800": "#804d00",
        "900": "#4d2e00",
      },
      neutral: {
        "100": "#f2f2f2",
        "200": "#d9d9d9",
        "300": "#bfbfbf",
        "400": "#a6a6a6",
        "500": "#8c8c8c",
        "600": "#737373",
        "700": "#595959",
        "800": "#404040",
        "900": "#262626",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.40625rem",
      "2xl": "1.7581249475479126rem",
      "3xl": "2.197499990463257rem",
      "4xl": "2.25rem",
      "5xl": "2.746875047683716rem",
      "6xl": "3.4375rem",
      "7xl": "3.815000057220459rem",
    },
  },
  plugins: [nextui()],
};
export default config;
