
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ReactQueryProvider from "@/components/react-query-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gatherly",
  description: "Event management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} dark:bg-black dark:text-white flex flex-col items-center`}>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
        <Toaster/>
      </body>
    </html>
  );
}
