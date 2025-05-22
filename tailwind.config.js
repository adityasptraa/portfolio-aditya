/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
