/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        specialElite: ["Special Elite", "monospace"],
      },
      colors: {
        purpleLight: "#E0BBE4",
        purpleMedium: "#957DAD",
        purpleDark: "#6A4C93",
        lilacLight: "#d8bfd8",
        lilacMedium: "#c4b5fd",
        lilacDark: "#6b21a8",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      boxShadow: {
        card: "0 8px 16px rgba(107, 33, 168, 0.15)",
        "card-hover": "0 12px 24px rgba(107, 33, 168, 0.25)",
      },
    },
  },
  plugins: [],
};
