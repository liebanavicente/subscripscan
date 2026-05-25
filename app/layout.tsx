import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suscripscan — Controla tus suscripciones",
  description:
    "Descubre cuánto gastas realmente al mes en suscripciones digitales y servicios recurrentes.",
  keywords: ["suscripciones", "finanzas personales", "gastos digitales"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
