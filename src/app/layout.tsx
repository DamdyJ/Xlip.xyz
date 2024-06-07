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
  openGraph: {
    type: "website",
    url: "https://www.xlip.xyz/",
    title: "Xlip.xyz - Effortless Link Shortening",
    description:
      "Welcome to Xlip.xyz, your go-to solution for transforming long, cumbersome URLs into concise, shareable links. Powered by cutting-edge technology, our URL shortener not only streamlines your links effortlessly but also provides insightful analytics. Say goodbye to unwieldy URLs and hello to sleek and professional links with advanced analytics at your fingertips.",
    images: [
      {
        url: "https://www.xlip.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xlip.xyz - Effortless Link Shortening",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.xlip.xyz/" />
        <meta
          property="og:title"
          content="Xlip.xyz - Effortless Link Shortening"
        />
        <meta
          property="og:description"
          content="Welcome to Xlip.xyz, your go-to solution for transforming long, cumbersome URLs into concise, shareable links. Powered by cutting-edge technology, our URL shortener not only streamlines your links effortlessly but also provides insightful analytics. Say goodbye to unwieldy URLs and hello to sleek and professional links with advanced analytics at your fingertips."
        />
        <meta property="og:image" content="https://www.xlip.xyz/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
