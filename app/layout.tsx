import type { Metadata } from "next";
import { Spectral, Manrope } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-spectral",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reliable Properties — Amanora's Trusted Property Partner",
    template: "%s | Reliable Properties",
  },
  description:
    "Reliable Properties has been helping buyers, sellers and tenants in Amanora Park Town, Pune for 15+ years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
