module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      screens: {
        "xs": "480px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [require("rippleui"), require("daisyui")],
  rippleui: {
    defaultStyle: false,
  },
};
