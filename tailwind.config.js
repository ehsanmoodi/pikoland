/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      peyda: ["peyda"],
    },
    extend: {
      colors: {
        raffia: "#E7CDB1",
        blueCharcoal: "#00070F",
        bamboo: "#DF6704",
        lochmara: "#0075C9",
        roofTerracotta: "#AC1D2F",
        persianIndigo: "#531078"
      },
      keyframes: {
        "bounce-horizontal": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "bounce-horizontal": "bounce-horizontal 1s infinite",
      },
    },
  },
  plugins: [],
};
