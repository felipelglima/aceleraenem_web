import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-base)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary-base)",
          dark: "var(--secondary-dark)",
          light: "var(--secondary-light)",
        },
        accent: {
          DEFAULT: "var(--accent-base)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
