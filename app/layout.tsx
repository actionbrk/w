import type { Metadata } from "next";
import "./globals.css";
import { merriweatherSans } from "./fonts";

export const metadata: Metadata = {
  title: "W",
  description: "The W Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweatherSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
