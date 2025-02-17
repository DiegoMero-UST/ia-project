import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-menu': 'slideInMenu 0.5s',
      },
      keyframes: {
        slideInMenu: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
