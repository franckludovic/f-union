import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/core/components/Navbar";
import { Footer } from "@/core/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PageViewTracker } from "@/core/components/PageViewTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F-Union Africa Summit 2026",
  description: "F-Union rassemble talents, entreprises et institutions pour construire l'Afrique de 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageViewTracker />
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        )}
      </body>
    </html>
  );
}
