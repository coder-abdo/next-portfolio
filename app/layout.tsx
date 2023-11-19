import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Gradient } from "@/components/gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelmonaem | Personal Portfolio",
  description:
    "Abdelmonaem is a Front End Developer with more than 4 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <Gradient />
        <Header />
        {children}
      </body>
    </html>
  );
}
