/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hannari: ["Hannari", "sans-serif"],
        sans: ["Noto Sans JP", "sans-serif"],
      },
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
        slidein: {
          "0%": { fontSize: "100%", marginLeft: "100%", width: "300%" },
          "75%": { fontSize: "300%", marginLeft: "25%", width: "150%" },
          "100%": { fontSize: "100%", marginLeft: "0%", width: "100%" },
        },
      },
      animation: {
        slide: "slide 10s linear infinite",
        rotateFade: "rotateFade 10s ease-in-out infinite",
        slidein: "slidein 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
