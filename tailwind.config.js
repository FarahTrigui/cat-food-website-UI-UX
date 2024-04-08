module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 900: "#313131" },
        black: { 900: "#000000" },
        gray: { 50: "#fffbf3", 500: "#969595" },
        yellow: { 100: "#feecca" },
        orange: { 50: "#fff2da" },
        deep_orange: { 100: "#ffd0b3", 300: "#e89058" },
        amber: { A700: "#ffa800" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
