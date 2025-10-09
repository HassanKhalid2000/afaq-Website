import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Solutions section background gradients
    'from-blue-50', 'to-blue-100', 'from-teal-50', 'to-teal-100',
    'from-red-50', 'to-red-100', 'from-green-50', 'to-green-100',
    // Solutions section icon gradients
    'from-blue-600', 'to-blue-800', 'from-teal-500', 'to-teal-600',
    'from-red-500', 'to-red-600', 'from-green-500', 'to-green-600',
    // Sector gradients
    'from-red-500', 'to-red-600', 'from-green-500', 'to-green-600',
    'from-blue-500', 'to-blue-600', 'from-blue-600', 'to-blue-800',
    'from-orange-500', 'to-red-600', 'from-emerald-500', 'to-teal-600',
    'from-red-600', 'to-red-800', 'from-indigo-500', 'to-purple-600',
    // Other gradients and colors
    'from-blue-800', 'to-teal-600', 'from-purple-600', 'to-pink-600',
    'text-teal-300', 'hover:text-teal-300',
    'text-blue-400', 'text-purple-600', 'text-blue-800',
    'bg-purple-600', 'hover:bg-pink-600',
    // Custom afaq gradients
    'from-afaq-purple', 'to-afaq-pink', 'bg-gradient-to-r', 'bg-gradient-to-br',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
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
          900: '#1e3a8a',
        },
        afaq: {
          blue: '#1e40af',
          'blue-light': '#2563eb',
          teal: '#14b8a6',
          'teal-light': '#06b6d4',
          purple: '#582a6e',
          'purple-light': '#A78BFA',
          pink: '#e3237b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out 0.3s both',
        'scroll': 'scroll 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-node': 'floatNode 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '0.9', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatNode: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -5px)' },
          '50%': { transform: 'translate(-3px, 3px)' },
          '75%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;