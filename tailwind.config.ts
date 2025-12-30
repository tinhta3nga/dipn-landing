import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          dark: "#0052CC",
        },
        navy: {
          DEFAULT: "#000D33",
          light: "#001A4D",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 5px rgba(0, 102, 255, 0.5))" },
          "100%": { filter: "drop-shadow(0 0 20px rgba(0, 102, 255, 1))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
