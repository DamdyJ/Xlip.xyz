import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xlip.xyz - Effortless Link Shortening",
  description:
    "Welcome to Xlip.xyz,your go-to solution for transforming long, cumbersome URLs into concise, shareable links. Powered by cutting-edge technology, our URL shortener not only streamlines your links effortlessly but also provides insightful analytics. Say goodbye to unwieldy URLs and hello to sleek and professional links with advanced analytics at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
