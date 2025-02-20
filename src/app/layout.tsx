import './globals.css';

import type { Metadata } from "next";
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: "devstage",
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-monsterrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`$oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background1.jpg)] bg-no-repeat bg-top md:bg-right-top">{children}</body>
    </html>
  );
}
