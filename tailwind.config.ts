import type { Config } from "tailwindcss";
import {
  grayDark,
  violetDark
} from '@radix-ui/colors';

const config: Config = {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      colors: {
        ...grayDark,
        ...violetDark,
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
