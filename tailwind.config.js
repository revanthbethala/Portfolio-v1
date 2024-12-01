/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "Times New Roman", "serif"],
        Inter: ["Inter", "Times New Roman", "sans"],
        Parkinsans: ["Parkinsans", "serif"],
      },
    },
  },
  plugins: [],
};
