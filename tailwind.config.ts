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
        },
        grey: {
          DEFAULT: "#788F9B",
          200: "#C7C8CE",
          400: "#7C7E8C",
          600: "#3E5765",
          700: "#44475B",
          900: "#191C1F",
        },
        blue: {
          base: "#E8F4FD",
          primary: "#0052FE",
          secondary: "#0082FF",
          1000: "#0F1629",
          1100: "#0B182F",
        },
        green: {
          base: "#EBF9F4",
          primary: "#14B079",
          secondary: "#0FBA83",
        },
        red: {
          base: "#FBF0EF",
          primary: "#E96975",
          secondary: "#F7324C",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
