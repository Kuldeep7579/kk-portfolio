/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: 'rgb(var(--color-void) / <alpha-value>)',
          panel: 'rgb(var(--color-void-panel) / <alpha-value>)',
          line: 'rgb(var(--color-void-line) / <alpha-value>)',
        },
        signal: {
          DEFAULT: 'rgb(var(--color-signal) / <alpha-value>)',
          dim: 'rgb(var(--color-signal-dim) / <alpha-value>)',
          glow: 'rgb(var(--color-signal-glow) / <alpha-value>)',
        },
        confirm: {
          DEFAULT: 'rgb(var(--color-confirm) / <alpha-value>)',
          dim: 'rgb(var(--color-confirm-dim) / <alpha-value>)',
        },
        ink: {
          high: 'rgb(var(--color-ink-high) / <alpha-value>)',
          low: 'rgb(var(--color-ink-low) / <alpha-value>)',
          faint: 'rgb(var(--color-ink-faint) / <alpha-value>)',
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

