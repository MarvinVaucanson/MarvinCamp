module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
          '20%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
    },
  },
}