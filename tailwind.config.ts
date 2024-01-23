/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        krub: ['Krub', 'sans-serif'],
      },
      backgroundColor: {
        'rgba-25': 'rgba(12, 29, 125, 0.25)',
      },
      colors: {
        primary1: '#FFBE34',
        primary2: '#091242',
        secondary: '#F4F4F4',
        hCol: '#1C1F35',
        pCol: '#666C89',
        gradCol: 'linear-gradient(94deg, #FFB629 -1.21%, #FFDA56 50.75%, #FFD7A6 102.71%)',

      },
      backgroundImage: {
        'bg-img-1': "url('/bg-img-1.webp')",
        'bg-img-2': "url('/bg-img-1.webp')",
        'footer-img': "url('/footer-img.webp')",
        'home-bg-2': "url('/home-bg-2.webp')",
      },
      screens: {
        "4xl": { max: "1900px" },
        // => @media (max-width: 1699px) { ... }

        "3xl": { max: "1699px" },
        // => @media (max-width: 1699px) { ... }

        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
  
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1099px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "836px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        exsm: { max: "380px" },
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};