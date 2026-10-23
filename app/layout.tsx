import type { Metadata } from "next";
import "./globals.css";

// TODO 1: เปลี่ยนชื่อและคำอธิบาย (แสดงบนแท็บเบราว์เซอร์และตอนแชร์ลิงก์)
export const metadata: Metadata = {
  title: "Frame website",
  description: "building website with nextjs and tailwindcss",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
