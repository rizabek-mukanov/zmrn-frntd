/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#9969FF',
        secondary: '#F2F1F4',
        'light-gray': '#fbfbfb',
      },
      colors: {
        primary: '#180A29',
        gray: '#9AACB5',
        'light-gray': '#9AACB5',
      },
      height: {
        19: '4.75rem',
        23: '5.75rem',
        body: 'calc(100vh - 92px)',
        'chat-body': 'calc(100vh - 164px)',
      },
      maxWidth: {
        '1/2': '50%',
        '4/5': '80%',
      },
      padding: {
        19: '4.75rem',
        22: '5.5rem',
        23: '5.75rem',
        45: '11.25rem',
      },
      spacing: {
        23: '5.75rem',
      },
    },
  },
};
