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
        // Official Covenir brand hex codes
        covenir: {
          navy:       '#003087',
          dark:       '#001A4D',
          green:      '#8DC63F',
          pink:       '#EC008C',
          orange:     '#F7941D',
          cyan:       '#00AEEF',
          purple:     '#7B2D8B',
          gray:       '#BCBEC0',
          text:       '#414042',
          'light-bg': '#F5F7FA',
        },
      },
      fontFamily: {
        // Montserrat — matches covenirbpo.com branding
        sans: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Primary brand gradient: navy → cyan → green
        'brand-gradient':      'linear-gradient(135deg, #003087 0%, #00AEEF 60%, #8DC63F 100%)',
        'brand-gradient-r':    'linear-gradient(to right, #003087, #00AEEF, #8DC63F)',
        'brand-gradient-btn':  'linear-gradient(90deg, #003087 0%, #00AEEF 100%)',
      },
      boxShadow: {
        'card':       '0 2px 16px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px 0 rgba(0,48,135,0.13)',
      },
    },
  },
  plugins: [],
};

export default config;
