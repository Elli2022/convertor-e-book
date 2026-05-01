import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convertor",
  description:
    "Interaktiv presentationssida för Convertor med fokus på passion, prestigelöshet och resultat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
