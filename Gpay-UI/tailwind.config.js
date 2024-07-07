    module.exports = {
      purge: {
        enabled: false,
        content: ["./index.html",
    "./**/*.{js,ts,jsx,tsx}"]
      },
      darkMode: 'class', // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {
          display: ['dark'],
          opacity: ['dark'],
        },
      },
      plugins: [],
    }
    