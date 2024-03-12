/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textprimary: '#000000',
        textsecondary: '#808080',
        bgprimary: '#ffffff',
        bgsecondary: '#ffffff',
      },
    },
  },
  plugins: [],
}

