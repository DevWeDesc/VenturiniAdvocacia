import type { Metadata } from "next";
import "./globals.css";
import { Rufina, Roboto } from "next/font/google";

const rufina = Rufina({
  weight: "700",
  variable: "--rufina-font",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto-font",
});

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
      <body className={`${rufina.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
