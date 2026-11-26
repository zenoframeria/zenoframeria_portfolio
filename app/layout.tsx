import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel" //nickname
});

export const metadata: Metadata = {
  title: "FRAMERIA | Portfolio",
  description: "A growing record of projects, experiments and things I'm learning in tech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pixel.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"/>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
