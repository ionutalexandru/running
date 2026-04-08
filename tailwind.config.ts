import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
