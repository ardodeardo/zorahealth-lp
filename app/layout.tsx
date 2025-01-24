import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ppeditorial } from "@/app/helper/font";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zora Health",
  description: "ardodeardo - frontend",
};

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ppeditorial.variable} antialiased`}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
