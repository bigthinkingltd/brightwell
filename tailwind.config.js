/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          display: "var(--font-quintessential)", // 'display' is the custom Tailwind class name
        },
      },
    },
    plugins: [],
  };
  