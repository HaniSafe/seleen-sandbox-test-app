import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Seleen Sandbox Test",
  description: "A Next.js app running in a Seleen AI sandbox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <DarkModeProvider>
          <Header />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}