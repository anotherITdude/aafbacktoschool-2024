import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AAF Back to School 2024",
  description: "AAF Back to School 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon.png" />
      <body
        suppressHydrationWarning={true}
        className={inter.className}>
        <div className="bg-gray-100">
        <ToasterProvider />
          {children}
          </div>
      </body>
    </html>
  );
}
