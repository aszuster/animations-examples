/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black-purple': '#2C003E',
      'white': '#FFFFFF',
      'grey-light': '#e0e0e0',
      'lilac-00': '#cb80ff',
      'lilac-10': '#ac63e0',
      'purple': '#7e00d8',
      'dark-purple-00': '#582a69',
      'dark-purple-10': '#3d104f',
      'green-00': '#00ffd1',
      'green-10': '#00dfb3',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      montserrat: ["Montserrat", "sans-serif"],
      
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};