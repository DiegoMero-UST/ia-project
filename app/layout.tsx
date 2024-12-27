import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Agentify.AI",
  description: "Smart solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
