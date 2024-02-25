/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  server: {
    proxy: {
      '/api': 'http://localhost:2000', // Sesuaikan dengan URL Laravel Anda
    },
  },
  plugins: [require("daisyui")],
}

