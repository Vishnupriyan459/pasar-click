/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/public/Asset/footer.svg')",
        // 'FreshChoice':"url('Asset/Vendor/FreshChoice.svg')",
        // 'Green-Garden':"url('/public/Asset/Vendor/Green Garden.svg)",
        // 'Leaf-Greens':"url('/public/Asset/Vendor/Leaf Greens.svg)",
        // 'Tender-Cuts':"url('/public/Asset/Vendor/Tender Cuts.svg)",
        
        
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