import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        cosmic: {
          50: "var(--cosmic-50)",
          100: "var(--cosmic-100)",
          200: "var(--cosmic-200)",
          300: "var(--cosmic-300)",
          400: "var(--cosmic-400)",
          500: "var(--cosmic-500)",
          600: "var(--cosmic-600)",
          700: "var(--cosmic-700)",
          800: "var(--cosmic-800)",
          900: "var(--cosmic-900)",
          950: "var(--cosmic-950)",
        },
        mystical: {
          50: "var(--mystical-50)",
          100: "var(--mystical-100)",
          200: "var(--mystical-200)",
          300: "var(--mystical-300)",
          400: "var(--mystical-400)",
          500: "var(--mystical-500)",
          600: "var(--mystical-600)",
          700: "var(--mystical-700)",
          800: "var(--mystical-800)",
          900: "var(--mystical-900)",
          950: "var(--mystical-950)",
        },
        celestial: {
          50: "var(--celestial-50)",
          100: "var(--celestial-100)",
          200: "var(--celestial-200)",
          300: "var(--celestial-300)",
          400: "var(--celestial-400)",
          500: "var(--celestial-500)",
          600: "var(--celestial-600)",
          700: "var(--celestial-700)",
          800: "var(--celestial-800)",
          900: "var(--celestial-900)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
