import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2E4E",
        "navy-dark": "#082238",
        gold: "#C99A2E",
        cream: "#FBF7EF",
        beige: "#F4EDDD",
        border: "#ECE4D2",
        "border-input": "#DCD3BB",
        muted: "#7A7A6E",
        body: "#3D3B32",
        ink: "#4A4A42",
        success: "#1FAA53",
        "success-dark": "#3F7D53",
      },
      fontFamily: {
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
