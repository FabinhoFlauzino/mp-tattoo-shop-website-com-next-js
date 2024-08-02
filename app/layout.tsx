import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { inter } from "./_lib/fonts";

export const metadata: Metadata = {
  title: "Sandro Luz Tatoo Shop",
  description: "Página da Tatoo Shop do Sandro Luz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-zinc-900 text-white flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <div className="flex-1 flex flex-col container px-4 max-w-7xl">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
