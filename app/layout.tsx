import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";

const pixel = Press_Start_2P({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel" //nickname
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-body" //nickname
});

export const metadata: Metadata = {
  title: "FRAMERIA | Portfolio",
  description: "A growing record of projects, experiments and things I'm learning in tech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${pixelify.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
