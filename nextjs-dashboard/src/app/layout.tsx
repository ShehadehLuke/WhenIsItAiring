import type { Metadata } from "next";
import { josefin } from "./fonts";
import './globals.css'

export const metadata: Metadata = {
  title: "When Is It Airing?",
  description: "Search for an anime to see when it's airing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} ${josefin.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
