import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flourishing Fibers",
  description: "From Roots to Fruits, Digitally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
      @import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap')
        </style> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

