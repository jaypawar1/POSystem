/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/**/*.{html,js}',
  './src/components/**/**/*.{html,js}',
  './src/pages/**/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
