/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      Playfair: ['Playfair Display', "serif"],
      hindVadodara: ['Hind Vadodara', "sans-serif"]
    },
    extend: {
      gridTemplateColumns: {
        'SL': 'auto 1fr',
      },
      backgroundImage: {
        'homeSectBg': "url('./Attachments/Images/HomeSect.png')",
        'WWDsectBg': "url('./Attachments/Images/WWDsect.png')",
      },
      colors: {
        'dark-purple': '#331B3B',
      },
    },
  },
  plugins: [],
}
