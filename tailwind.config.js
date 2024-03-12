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
        textsecondary: '#334155',
        bgprimary: '#ffffff',
        bgsecondary: '#334155',
      },
    },
  },
  plugins: [],
}

