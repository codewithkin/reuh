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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dullDark: "#9a9a9a",
        dullLight: "#c4c4c4",
        primaryLight: "#008BF8",
        primaryDark: "#011936",
        secondary: "#96E072",
        tertiary: "#FB8500",
        danger: "#EF233C"
      },
    },
  },
  plugins: [],
} satisfies Config;
