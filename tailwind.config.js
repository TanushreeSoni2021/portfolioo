/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark":    "#1c0f00",
        "bg-card":    "#2a1800",
        "bg-card2":   "#1f1200",
        "clr-orange": "#e8621a",
        "clr-orange-light": "#f97316",
        "clr-orange-dark":  "#c94f10",
        "clr-cream":  "#fdf4e7",
        "clr-muted":  "#c9a97a",
        "clr-brown":  "#3d2000",
        "clr-border": "#5c3310",
      },
      animation: {
        "badge-float-0": "badgeFloat 2.8s ease-in-out 0s infinite",
        "badge-float-1": "badgeFloat 2.8s ease-in-out 0.4s infinite",
        "badge-float-2": "badgeFloat 2.8s ease-in-out 0.8s infinite",
        "badge-float-3": "badgeFloat 2.8s ease-in-out 1.2s infinite",
        "orbit-cw-12":   "orbitCW 12s linear infinite",
        "orbit-ccw-8":   "orbitCCW 8s linear infinite",
        "orbit-ccw-14":  "orbitCCW 14s linear infinite",
        "orbit-cw-9":    "orbitCW 9s linear infinite",
      },
      keyframes: {
        badgeFloat: {
          "0%,100%": { transform: "translateY(0px)",  boxShadow: "0 0 14px rgba(232,98,26,0.30),0 2px 8px rgba(0,0,0,0.4)" },
          "50%":     { transform: "translateY(-8px)", boxShadow: "0 0 22px rgba(232,98,26,0.55),0 8px 20px rgba(0,0,0,0.3)" },
        },
        orbitCW: {
          "0%":   { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
        orbitCCW: {
          "0%":   { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
