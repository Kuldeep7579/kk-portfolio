/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0B0E14',
          panel: '#121622',
          line: '#1E2333',
        },
        signal: {
          DEFAULT: '#7C9EFF',
          dim: '#5A7AD9',
          glow: '#9FB8FF',
        },
        confirm: {
          DEFAULT: '#3DDC97',
          dim: '#2EB87E',
        },
        ink: {
          high: '#E8EAF0',
          low: '#8891A8',
          faint: '#5C6479',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(135deg, #7C9EFF 0%, #3DDC97 100%)',
        'panel-gradient': 'linear-gradient(180deg, rgba(124,158,255,0.08) 0%, rgba(18,22,34,0) 100%)',
        'radial-fade': 'radial-gradient(circle at 50% 0%, rgba(124,158,255,0.15) 0%, rgba(11,14,20,0) 60%)',
      },
      boxShadow: {
        'glow-signal': '0 0 40px -5px rgba(124,158,255,0.4)',
        'glow-confirm': '0 0 40px -5px rgba(61,220,151,0.35)',
        'glass': '0 8px 32px 0 rgba(0,0,0,0.36)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

