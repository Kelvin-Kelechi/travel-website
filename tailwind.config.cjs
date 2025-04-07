// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          sans: ["Didot", "Mulish", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
