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
      // keyframes: {
      //   bloom: {
      //     "0%": {
      //       width: "0%",
      //       height: "1px",
      //       "background-color": "white",
      //     },

      //     "25%": {
      //       width: "25%",
      //       height: "1.05px",
      //       "background-color": "white",
      //     },

      //     "50%": {
      //       width: "50%",
      //       height: "1.1px",
      //       "background-color": "orange",
      //     },

      //     "75%": {
      //       width: "75%",
      //       height: "1.15px",
      //       "background-color": "orange",
      //     },

      //     "100%": {
      //       width: "100%",
      //       height: "1.2px",
      //       "background-color": "#ff6d37",
      //     },
      //   },
      // },
      // spacing: {
      //   0: "0px",
      //   1: "8px",
      //   2: "12px",
      //   3: "16px",
      //   4: "24px",
      //   5: "32px",
      //   6: "48px",
      //   7: "56px",
      // },
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
