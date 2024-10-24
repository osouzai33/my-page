/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(-150%)" },
        },
        rotateFade: {
          "0%": { transform: "rotate(0deg)", opacity: "1" },
          "25%": { transform: "rotate(90deg)", opacity: "0" },
          "50%": { transform: "rotate(180deg)", opacity: "1" },
          "75%": { transform: "rotate(270deg)", opacity: "0" },
          "100%": { transform: "rotate(360deg)", opacity: "1" },
        },
      },
      animation: {
        slide: "slide 8s linear infinite",
        rotateFade: "rotateFade 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
