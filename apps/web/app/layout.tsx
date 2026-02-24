import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConnectionStatus from "@/components/ConnectionStatus";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pathfinder",
  description: "Interactive Career Exploration Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface-primary min-h-screen antialiased">
        <ConnectionStatus />
        {children}
      </body>
    </html>
  );
}
