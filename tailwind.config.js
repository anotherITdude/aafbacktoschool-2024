/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      webBlue: "#041571",
      webLightBlue: "#2F3C81",
      webSkyBlue: "#28BFDE",
      webYellow: "#FFBA11",
      webWhite: "#ffffff",
      webRed: "#E2211C",
      webGray: "#3F4040",
      webLiteGray: "#c8c8c8",
      webGreen: "#00833C",
      webBlack: "#000000"
    },
    fontFamily: {
      "DINCondensed-Bold": ["DINCondensed-Bold"],
      "Circular-Bold": ["Circular-Bold"],
      "Circular-Book": ["Circular-Book"],
      "DIN-Bold": ["DIN-Bold"],
      "DIN-Black": ["DIN-Black"],
      "DIN": ["DIN"],
      "DIN-Demi": ["DIN-Demi"],
      "DIN-Regular": ["DIN-Regular"],
      "DINCondensed-Regular": ["DINCondensed-Regular"],
      "Gotham-Medium" :["Gotham-Medium"],
      // "gotham-black-italic": ["gotham-black-italic"],
      // "neosans-bold": ["neosans-bold"],
      // "neosans-medium": ["neosans-medium"],
     "DINArabic-Black": ["DINArabic-Black"],
      // "DINArabic-CondBlack": ["DINArabic-CondBlack"],
      // "circularStd": ["circularStd"],
      // "DINArabic-CondBold": ["DINArabic-CondBold"],
     "helvetica-neue-lt-arabic-75-bol": ["helvetica-neue-lt-arabic-75-bol"],
    "HelveticaNeueLTArabic-Roman": ["HelveticaNeueLTArabic-Roman"],
      // "DIN-DemiBold": ["DIN-DemiBold"]

    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}