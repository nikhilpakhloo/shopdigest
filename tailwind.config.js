/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#820AD1",
        primaryGray: "#111827",
        secondaryGrayDark: "#5C6575",
        secondaryGrayLight: "#B3BDC1",
        primaryblue:"#6390F8",
        black: "#212121",
        green: "#68C78F",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1117px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
