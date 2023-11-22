import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Gradient } from "@/components/gradient";
import ActiveSectionProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer";
import ThemeProvider from "@/context/themContext";
import { ThemeSwitch } from "@/components/themeSwitch";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 transition-colors dark:text-opacity-90`}
      >
        <ThemeProvider>
          <ActiveSectionProvider>
            <Gradient />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionProvider>
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
