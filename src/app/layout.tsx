import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael do Carmo - Desenvolvedor Web",
  description: "Portfolio de Rafael do Carmo, Desenvolvedor de aplicações web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
