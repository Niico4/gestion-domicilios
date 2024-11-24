import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(to left, #7db8ff 0%, #d8a7ff 100%)',
        'text-gradient': 'linear-gradient(40deg, #00fff7 0%, #ae4aff 100%)',
      },
      colors: {
        primary: 'transparent',
        secondary: '#c176fe',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
