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
        primaryLight: "#008BF8",
        primaryDark: "#011936",
        secondaryDark: "#96E072",
        secondaryLight: "#71FF2D",
        danger: "#EF233C",
        tertiary: "#FB8500"
      },
    },
  },
  plugins: [],
} satisfies Config;
