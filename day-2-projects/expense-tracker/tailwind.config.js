/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        login: "rgba(17, 24, 39, 1)",
        loginTxt: "rgba(243, 244, 246, 1)",
        button: "rgba(167, 139, 250, 1)",
        buttonTxt: "rgba(17, 24, 39, 1)",
        socialMsg: "rgba(156, 163, 175, 1)"
      },
      border: {
        inputLgn: "1px solid rgba(55, 65, 81, 1)",
      },
    },
  },
  plugins: [],
};
