import localFont from "next/font/local";

const ppeditorial = localFont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ppeditorial",
});

export { ppeditorial };
