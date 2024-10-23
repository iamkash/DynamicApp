module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: 'var(--primaryBackground)',
        secondaryBackground: 'var(--secondaryBackground)',
        tertiaryBackground: 'var(--tertiaryBackground)',
        primaryTextColor: 'var(--primaryTextColor)',
        secondaryTextColor: 'var(--secondaryTextColor)',
        highlightBackgroundColor: 'var(--highlightBackgroundColor)',
        accentTextColor: 'var(--accentTextColor)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font (optional)
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12',
    'h-10', 
    'h-20',
    'h-32',
    'h-40',
    'h-52',
    'h-64',
    'h-80',
    'h-96',
  ],
}



