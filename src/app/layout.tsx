import "../styles/globals.scss";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import React from "react";
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const env = process.env.NODE_ENV;

  return (
    <html lang="en">
      { env === 'production' ?
        <GoogleTagManager gtmId="GTM-M48PNMP" />
        : null
      }

      <body>
        <Menu />

        {children}

        <Footer />
      </body>
    </html>
  );
}
