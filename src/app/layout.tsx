import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kpz Shorter",
  description:
    "Kpz Shorter é uma ferramenta para encurtar URLs e gerar links curtos. Com o encurtador de URL é possível criar um link encurtado fácil de compartilhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable}`}
    >
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
