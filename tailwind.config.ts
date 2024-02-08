import type { Config } from "tailwindcss";

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) } as any;
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) } as any;
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) } as any;
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) } as any;
const rem0_5 = {
  ...Array.from(Array(60)).map((_, i) => `${i / 10}rem`),
} as any;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_200,
      lineHeight: px0_100,
      width: px0_1000,
      height: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_200,
      borderRadius: px0_100,
      colors: {
        "main-background": "var(--main-background)",
        "main-point": "var(--main-point)",
        "main-white": "var(--main-white)",
        "point-red": "var(--point-red)",
        "point-green": "var(--point-green)",
        "point-yellow": "var(--point-yellow)",
        "point-blue": "var(--point-blue)",
        "gray-dark-text-1": "var(--gray-dark-text-1)",
        "gray-medium-dark": "var(--gray-medium-dark)",
        "gray-medium-text-2": "var(--gray-medium-text-2)",
        "gray-light-medium": "var(--gray-light-medium)",
        "gray-light": "var(--gray-light)",
        "basic-red": "var(--basic-red)",
        "basic-orange": "var(--basic-orange)",
        "basic-green": "var(--basic-green)",
        "basic-blue": "var(--basic-blue)",
      },
      screens: {
        tablet: "1000px",
      },
      zIndex: {
        modal: "100",
        navigatoinList: "200",
        letterModal: "200",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
export default config;
