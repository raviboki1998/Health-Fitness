/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  variants: {},
  plugins: [],
}



// theme: {
//   fontWeight: {
//     thin: '100',
//     hairline: '100',
//     extralight: '200',
//     light: '300',
//     normal: '400',
//     medium: '500',
//     semibold: '600',
//     bold: '700',
//     extrabold: '800',
//     'extra-bold': '800',
//     black: '900',
//   }
// }