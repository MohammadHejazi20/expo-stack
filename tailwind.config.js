/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',

        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        muted: { DEFAULT: 'oklch(var(--muted))', foreground: 'oklch(var(--muted-foreground))' },
        accent: { DEFAULT: 'oklch(var(--accent))', foreground: 'oklch(var(--accent-foreground))' },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        card: { DEFAULT: 'oklch(var(--card))', foreground: 'oklch(var(--card-foreground))' },

        // Add any new ones from your v4 theme
        main: 'oklch(var(--main))',
        overlay: 'oklch(var(--overlay))',
        'main-foreground': 'oklch(var(--main-foreground))',
      },

      borderRadius: {
        base: 'var(--radius-base)',
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },

      boxShadow: { shadow: 'var(--shadow-shadow)' },

      fontWeight: { base: 'var(--font-weight-base)', heading: 'var(--font-weight-heading)' },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
