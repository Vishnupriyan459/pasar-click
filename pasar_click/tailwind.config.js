/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'Smobile':'320px',
      'Mmobile':'375px',
      'Lmobile':'425px',
      'tablet': '640px',
      'laptop': '1024px',
      "Llaptop":'1400px',
      'desktop': '1600px',
      'Ldesktop':"2500px"
     
    },
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/public/Asset/footer.svg')",
        // 'FreshChoice':"url('Asset/Vendor/FreshChoice.svg')",
        // 'Green-Garden':"url('/public/Asset/Vendor/Green Garden.svg)",
        // 'Leaf-Greens':"url('/public/Asset/Vendor/Leaf Greens.svg)",
        // 'Tender-Cuts':"url('/public/Asset/Vendor/Tender Cuts.svg)",
        'DailySales-bg': "url('/public/Asset/Dailysales/dailysalesbackground.svg')",
        'DailySales-img': "url('/public/Asset/Dailysales/dailysalesbanner.svg')",
        'Search_bg':  "url('/public/Asset/Search/background.svg')"
      },
      colors: {
        bordergreen: '#1AC84B',
        lightgreen:'#D2F4D6'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}