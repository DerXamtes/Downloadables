import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/themeprovider";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobilenav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://downloadables.ansorg.dev/"),
  title: "Downloadables",
  description: "Just Download It!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <MobileNav />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
