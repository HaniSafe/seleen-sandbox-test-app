import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
