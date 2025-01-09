import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dullLight: "#c4c4c4",
        dullDark: "#9a9a9a",
        primaryLight: "",
        priamryDark: "",
        secondaryDark: "",
        secondaryLight: "",
        danger: ""
      },
    },
  },
  plugins: [],
} satisfies Config;
