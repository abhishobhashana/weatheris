import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "weatheris",
    template: "%s",
  },
  description: "weatheris",
  keywords: [
    "weather",
    "frontend developer",
    "next.js",
    "react",
    "react.js",
    "web development",
  ],
  metadataBase: new URL("https://weatheris.vercel.app"),
  // verification: {
  //   google: "AnduTPvERUUcVPeBxD28apaqOoc3pvEucDXZcKalmVk",
  // },
  // icons: {
  //   apple: [
  //     { url: "/apple-icon-57x57.png", sizes: "57x57" },
  //     { url: "/apple-icon-60x60.png", sizes: "60x60" },
  //     { url: "/apple-icon-72x72.png", sizes: "72x72" },
  //     { url: "/apple-icon-76x76.png", sizes: "76x76" },
  //     { url: "/apple-icon-114x114.png", sizes: "114x114" },
  //     { url: "/apple-icon-120x120.png", sizes: "120x120" },
  //     { url: "/apple-icon-144x144.png", sizes: "144x144" },
  //     { url: "/apple-icon-152x152.png", sizes: "152x152" },
  //     { url: "/apple-icon-180x180.png", sizes: "180x180" },
  //   ],
  //   icon: [
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //     { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  //     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //     { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
  //   ],
  //   shortcut: "/favicon-32x32.png",
  // },
  manifest: "/manifest.json",
  openGraph: {
    title: "weatheris",
    description: "weatheris",
    url: "https://weatheris.vercel.app",
    siteName: "weatheris",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "weatheris",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "weatheris",
    description: "weatheris",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased tracking-tight`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
