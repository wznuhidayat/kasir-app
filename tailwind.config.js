/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8989', // Sesuaikan dengan URL Laravel Anda
    },
  },
  plugins: [require("daisyui")],
}

