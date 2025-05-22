import type { Metadata } from "next";
import "../styles/globals.scss";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Plumb-All",
  description: "Plumb-All's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />

        {children}

        <Footer />
      </body>
    </html>
  );
}
