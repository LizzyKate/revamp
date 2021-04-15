module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      screens: {
        // sm: '640px',
        // md: '768px',
        // lg: '1030px',
        // xl: '1280px',
      },
      colors: {
        border: {
          100: '#DEE5EF',
          200: '#E0E0E0',
          300: '#dee5ef54',
          400: '#F2C94C',
          500: 'rgb(163 163 163)',
        },
        text: {
          100: ' #001A41',
          200: '#828282',
          300: ' #BDBDBD',
          400: '#F2994A',
          500: '#9B51E0',
        },
        bg: {
          100: '#0C56C2 ',
          200: '#E5E5E5',
          300: '#F2F2F2',
          400: 'rgba(242, 153, 74, 0.15)',
          500: 'rgba(155, 81, 224, 0.15)',
          600: ' #32BA85',
          700: 'rgb(50 186 133 / 26%)',
        },
        content: {
          100: '#F7F8FA',
          200: '#2F80ED',
        },
        button: {
          100: 'rgba(12, 86, 194, 0.1)',
        },
      },
      fontFamily: {
        body: 'Poppins',
        text: 'Inter',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // ...
    listStyleType: false,
  },
}
