import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ISC — Ingeniería en Sistemas Computacionales",
    template: "%s | ISC",
  },
  description:
    "Descubre la carrera de Ingeniería en Sistemas Computacionales. Test vocacional, retícula, casos de éxito, eventos y toda la información de admisión en un solo lugar.",
  keywords: [
    "Ingeniería en Sistemas Computacionales",
    "ISC",
    "carrera tecnología",
    "programación",
    "inteligencia artificial",
    "TECNM",
    "admisión",
  ],
  openGraph: {
    title: "ISC — Ingeniería en Sistemas Computacionales",
    description: "Tu futuro en tecnología comienza aquí.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
