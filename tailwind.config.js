// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FFF8EB',
          100: '#FDEFD6',
          200: '#F5D9A8',
          300: '#EEC47A',
          400: '#E3B567', // accent (glow + icônes)
          500: '#DDA85A', // or principal
          600: '#C28E4A',
          700: '#A7753C',
          800: '#7F5730',
          900: '#593D24',
        },
      },
      boxShadow: {
        'gold-glow': '0 0 12px 4px rgba(221,168,90,0.45)',
        'gold-soft': '0 0 28px 10px rgba(227,181,103,0.20)',
      },
      // Optionnel : gradient or prêt à l'emploi
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #C28E4A 0%, #E3B567 40%, #F5D9A8 100%)',
      },
    },
  },
  plugins: [],
};
