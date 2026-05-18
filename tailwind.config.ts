import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Covenir brand palette — verify exact hex values against covenirbpo.com DevTools
        brand: {
          navy:     '#0B2F6E', // deep navy primary
          blue:     '#0E74C8', // interactive blue
          sky:      '#E8F4FD', // light tint background
          accent:   '#FF6B35', // warm CTA accent
          dark:     '#0A1F47', // footer / dark sections
          gray:     '#6B7280',
          'light-gray': '#F3F6FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, #0A1F47 0%, #0B2F6E 50%, #0E74C8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
