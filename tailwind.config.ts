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
        // Covenir brand — sourced from official pinwheel logo
        covenir: {
          navy:    '#003087', // primary navy blue
          dark:    '#001A4D', // deepest navy (hero bg start)
          mid:     '#0047BE', // mid blue (hero gradient)
          green:   '#8DC63F', // pinwheel green
          pink:    '#EC008C', // pinwheel pink
          orange:  '#F7941D', // pinwheel orange
          cyan:    '#00AEEF', // pinwheel cyan
          purple:  '#7B2D8B', // pinwheel purple
          gray:    '#BCBEC0', // pinwheel light gray
          text:    '#414042', // body text dark
          'light-bg': '#F5F7FA', // page background
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #001A4D 0%, #003087 55%, #0047BE 100%)',
        'card-gradient': 'linear-gradient(135deg, #003087 0%, #0047BE 100%)',
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px 0 rgba(0,48,135,0.13)',
        'nav': '0 1px 0 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
