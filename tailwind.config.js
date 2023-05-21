/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#254E7A',
        secondary: '#F7F3EA',
        blue: {
          light: '#CBE3EF',
          DEFAULT: '#82C2E6',
          dark: '#5584B0',
        },
        black: '#020408',
        gray: {
          extralight: '#F0F0F0',
          light: '#E1E1E1',
          DEFAULT: '#A1A2A4',
          dark: '#67686B',
        },
        red: '#DA4444',
        green: '#5EBB4B',
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fill, minmax(208px, 1fr))',
        'myto' : 'repeat(auto-fill, minmax(380px, 1fr))'
      }
    },
  },
  plugins: [],
}

