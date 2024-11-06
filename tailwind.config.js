/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      scrollBehavior: ['smooth'],
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        'electric-blue': '#1E90FF', // Colore personalizzato per il blu elettrico
        'blue-jury': '#3db9eb', // Colore personalizzato per il blu reale
        'role-yellow': '#FBD43B', // Colore personalizzato per il giallo

      },

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'infinite-scroll-1': 'infinite-scroll 17s linear infinite',
        'infinite-scroll-2': 'infinite-scroll 10s linear infinite',
        'infinite-scroll-3': 'infinite-scroll 14s linear infinite',
      },

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],


};
