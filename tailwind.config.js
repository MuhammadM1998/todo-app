module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },

      backgroundImage: {
        login:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url('/_nuxt/assets/images/login-background.jpg')"
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },

    screens: {
      '4xs': '360px',
      '3xs': '400px',
      '2xs': '480px',
      xs: '560px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    }
  }
};
