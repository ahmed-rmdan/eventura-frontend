import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eventura - Book Your Next Event with Ease",
  description: "Eventura is your premier platform for discovering and booking events and ceremonies. Whether you're looking for concerts, conferences, weddings, or private parties, Eventura connects you with the best venues and organizers in town. With a user-friendly interface and secure booking system, planning your next unforgettable experience has never been easier.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
