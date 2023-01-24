// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#075985",
          secondary: "#a16207",
          accent: "#365314",
          neutral: "#a8a29e",
          "base-100": "#0f766e",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
