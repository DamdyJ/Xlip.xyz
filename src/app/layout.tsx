import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xlip | Effortless Link Shortener",
  description:
    "Xlip | Your go-to solution for transforming long, cumbersome URLs into sleek, shareable links. Powered by cutting-edge technology, our URL shortener offers advanced link management and insightful analytics. Say goodbye to unwieldy URLs and hello to sleek, professional links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <head>
        <meta property="og:url" content="https://www.xlip.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Xlip | Effortless Link Shortener" />
        <meta
          property="og:description"
          content="Xlip | Your go-to solution for transforming long, cumbersome URLs into sleek, shareable links. Powered by cutting-edge technology, our URL shortener offers advanced link management and insightful analytics. Say goodbye to unwieldy URLs and hello to sleek, professional links."
        />
        <meta property="og:image" content="https://www.xlip.xyz/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="631" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="xlip.xyz" />
        <meta property="twitter:url" content="https://www.xlip.xyz/" />
        <meta name="twitter:title" content="Xlip | Effortless Link Shortener" />
        <meta
          name="twitter:description"
          content="Xlip | Your go-to solution for transforming long, cumbersome URLs into sleek, shareable links. Powered by cutting-edge technology, our URL shortener offers advanced link management and insightful analytics. Say goodbye to unwieldy URLs and hello to sleek, professional links."
        />
        <meta
          name="twitter:image"
          content="https://www.xlip.xyz/og-image.png"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
