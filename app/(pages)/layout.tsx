import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zora Health",
  description: "ardodeardo - frontend",
};

import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
