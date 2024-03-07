import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          base: "#EFF2F5",
          off: "#F2F2F2",
          gray: "#788F9B",
        },
        blue: {
          DEFAULT: "#0052FE",
          100: "#E8F4FD",
          1000: "#0F1629",
          1100: "#0B182F",
        },
        success: {
          base: "#EBF9F4",
          primary: "#14B079",
        },
        failure: {
          base: "#FBF0EF",
          primary: "#E96975",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
