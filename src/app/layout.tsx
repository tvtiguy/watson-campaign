import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Watson for Oregon House District 29",
  description: "Mark Watson is running for Oregon House District 29, representing Hillsboro, Forest Grove, and Cornelius. Small business owner, school board director, and community advocate.",
  keywords: ["Mark Watson", "Oregon House", "District 29", "Hillsboro", "Forest Grove", "Cornelius", "Oregon Legislature"],
  openGraph: {
    title: "Mark Watson for Oregon House District 29",
    description: "Mark Watson is running for Oregon House District 29, representing Hillsboro, Forest Grove, and Cornelius.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
