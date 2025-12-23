import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dataarklabs.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DataArk Labs | Workflow Automation & Data Analytics for CPG",
    template: "%s | DataArk Labs"
  },
  description: "Transform your commercial data into competitive advantage. I build AI agents and analytics platforms for CPG brands, retailers, and distributors—with security, compliance, and responsible AI practices built-in.",
  keywords: [
    "CPG analytics",
    "trade spend optimization",
    "promotional analytics",
    "AI agents",
    "workflow automation",
    "revenue growth management",
    "RGM",
    "retail analytics",
    "AI governance",
    "data analytics for CPG"
  ],
  authors: [{ name: "DataArk Labs" }],
  creator: "DataArk Labs",
  publisher: "DataArk Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'DataArk Labs',
    title: 'DataArk Labs | Workflow Automation & Data Analytics for CPG',
    description: 'Transform your commercial data into competitive advantage. I build AI agents and analytics platforms for CPG brands, retailers, and distributors.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DataArk Labs - CPG Analytics & AI Automation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataArk Labs | Workflow Automation & Data Analytics for CPG',
    description: 'Transform your commercial data into competitive advantage. I build AI agents and analytics platforms for CPG brands, retailers, and distributors.',
    images: ['/images/twitter-image.png'],
    creator: '@dataarklabs',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'your-google-verification-code', // Add your verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
