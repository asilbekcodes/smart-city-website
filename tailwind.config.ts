import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // 🔥 Dark mode yoqildi
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        darkBg: "#0f172a", // dark background
      },
    },
  },
  plugins: [],
} satisfies Config;
