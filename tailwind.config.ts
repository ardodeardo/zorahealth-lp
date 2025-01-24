import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ppeditorial: ["var(--font-ppeditorial)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "16px",
          paddingRight: "16px",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "initial",
            paddingRight: "initial",
          },
          "@screen md": {
            maxWidth: "488px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
} satisfies Config;
