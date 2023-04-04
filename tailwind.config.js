/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      white: "white",
      whitesmoke: "whitesmoke",
      orange: "#ff6d37",
      green: "#90ee90",
      gray: "#282c33",
      "gray-mid": "#282c338e",
      "gray-light": "#282c3366",
    },
    extend: {
      spacing: {
        0: "0px",
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "56px",
      },
      boxShadow: {
        normalButton:
          "0px 0px 4px 2px rgba(245, 245, 245, 0.1), 0px 0px 4px 2px transparent inset",
        clickedButton: "0px 0px 5px 1px lightgreen",
        blogCard: "0px 0px 12px 1px rgba(0, 0, 0, 0.4)",
        focuedBlogCard: "0px 0px 10px 1px lightgreen",
      },
    },
  },
  plugins: [],
};
