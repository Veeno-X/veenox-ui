import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        jetBrains: "JetBrains Mono",
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#121418",
        secondary: "#1B1D22",
        green: "rgb(14 203 129)",
        blue: "#3498DB",
        yellow: "#D8A600",
        red: "rgb(234 57 67)",
        purple: "#836EF9",
        font: {
          DEFAULT: "rgba(255, 255, 255, 1)",
          90: "rgba(255, 255, 255, 0.9)",
          80: "rgba(255, 255, 255, 0.8)",
          70: "rgba(255, 255, 255, 0.7)",
          60: "rgba(255, 255, 255, 0.6)",
          40: "rgba(255, 255, 255, 0.4)",
          20: "rgba(255, 255, 255, 0.2)",
        },
        borderColor: {
          DEFAULT: "#2F3239",
          DARK: "rgba(205,205,205,0.05)",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        spinInfinite: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        spinInfinite: "spinInfinite 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
