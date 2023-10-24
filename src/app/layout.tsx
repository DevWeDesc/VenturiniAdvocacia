import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Rufina } from "next/font/google";

const rufina = Rufina({
  weight: "700",
  variable: "--rufina-font",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venturini Advocacia",
  description: "Venturini Advocacia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rufina.className}`}>{children}</body>
    </html>
  );
}
