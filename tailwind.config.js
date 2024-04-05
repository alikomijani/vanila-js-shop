/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,}", "./main.js"],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors(), require("@tailwindcss/forms")],
};
