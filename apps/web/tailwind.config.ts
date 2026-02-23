import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode palette — Discord/Twitch aesthetic
        surface: {
          primary: "#0F0F14",    // darkest background
          secondary: "#16161D",  // card backgrounds
          tertiary: "#1E1E28",   // elevated/hover
          accent: "#252533",     // active states
        },
        text: {
          primary: "#E8E8ED",
          secondary: "#9B9BAF",
          tertiary: "#6B6B80",
          disabled: "#45455A",
        },
        border: {
          primary: "#2A2A3C",
          secondary: "#3A3A50",
          focus: "#7C5CFC",
        },
        accent: {
          primary: "#7C5CFC",    // purple — main accent
          "primary-light": "#7C5CFC20",
          red: "#FF6B6B",
          "red-light": "#FF6B6B15",
          green: "#4ADE80",
          "green-light": "#4ADE8015",
          yellow: "#FBBF24",
          "yellow-light": "#FBBF2415",
          blue: "#60A5FA",
          "blue-light": "#60A5FA15",
          purple: "#A78BFA",
          "purple-light": "#A78BFA15",
          pink: "#F472B6",
          "pink-light": "#F472B615",
          orange: "#FB923C",
          "orange-light": "#FB923C15",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
        card: "0 2px 8px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)",
        elevated: "0 8px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
        glow: "0 0 20px rgba(124, 92, 252, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "bounce-in": "bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 92, 252, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(124, 92, 252, 0.5)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
