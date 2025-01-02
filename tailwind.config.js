/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js,jsx,ts,tsx}", "./src/index.tsx"],
  theme: {
    container: {
      center: true
    },
    listStyleType: {
      square: "square"
    },
    extend: {
      animation: {
        "orbit-1": "orbit-1 4s linear infinite",
        "orbit-2": "orbit-2 3.5s linear infinite",
        "orbit-3": "orbit-3 3s linear infinite",
        "orbit-4": "orbit-4 4s linear infinite",
        "orbit-5": "orbit-5 3s linear infinite",
        "orbit-6": "orbit-6 3.5s linear infinite"
      },
      keyframes: {
        "orbit-1": {
          "15%": { "z-index": 0 },
          "25%": { transform: "scale(0.7)" },
          "50%": { transform: "translateX(-24rem) scale(1)" },
          "65%": { "z-index": 1 },
          "75%": { transform: "scale(1.3)" },
          "85%": { "z-index": 1 }
        },
        "orbit-2": {
          "15%": { "z-index": 0 },
          "25%": { transform: "scale(0.7)" },
          "50%": { transform: "translate(-16rem, -16rem)" },
          "65%": { "z-index": 1 },
          "75%": { transform: "scale(1.3)" },
          "85%": { "z-index": 1 }
        },
        "orbit-3": {
          "15%": { "z-index": 0 },
          "25%": { transform: "scale(0.7)" },
          "50%": { transform: "translate(-16rem, 16rem)" },
          "65%": { "z-index": 1 },
          "75%": { transform: "scale(1.3)" },
          "85%": { "z-index": 1 }
        },
        "orbit-4": {
          "15%": { "z-index": 1 },
          "25%": { transform: "scale(1.3)" },
          "50%": { transform: "translateX(24rem)" },
          "65%": { "z-index": 0 },
          "75%": { transform: "scale(0.7)" }
        },
        "orbit-5": {
          "15%": { "z-index": 1 },
          "25%": { transform: "scale(1.3)" },
          "50%": { transform: "translate(16rem, -16rem)" },
          "65%": { "z-index": 0 },
          "75%": { transform: "scale(0.7)" }
        },
        "orbit-6": {
          "15%": { "z-index": 1 },
          "25%": { transform: "scale(1.3)" },
          "50%": { transform: "translate(16rem, 16rem)" },
          "65%": { "z-index": 0 },
          "75%": { transform: "scale(0.7)" }
        }
      }
    }
  },
  plugins: []
};
