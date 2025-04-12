const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '390px',
        md: '810px',
        lg: '1200px',
        xl: '1440px'
      },
      colors: {
        background: '#0D0D0D',
        foreground: '#FFFFFF',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          950: '#122A59',
          900: '#133E87',
          800: '#124CBB',
          700: '#0D5EE8',
          600: '#1477FC',
          500: '#2B96FF',
          400: '#53B7FF',
          300: '#8AD1FF',
          200: '#BAE2FF',
          100: '#D8EEFF',
          50: '#EEF8FF'
        },
        secondary: {
          700: '#AD8D19',
          600: '#DDB420',
          500: '#F3C623',
          400: '#F5D14F',
          300: '#F7D96C',
          200: '#F9E59A',
          100: '#FBEDBB',
          50: '#FEF9E9'
        },
        neutral: {
          700: '#454242',
          600: '#5F5C5C',
          500: '#787777',
          400: '#929292',
          300: '#ABABAB',
          200: '#C5C5C5',
          100: '#DBDBDB',
          50: '#F8F8F8'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
};
export default config;
