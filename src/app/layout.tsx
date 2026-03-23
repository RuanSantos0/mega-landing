import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo" });

export const metadata: Metadata = {
  title: "MEGA - Campeonato Pokemon TCG | Aracati",
  description: "Entrada gratuita. Campeonato Pokemon TCG em Aracati — inscrição R$ 10 para competir (evita fantasmas) + lanche. Trocas, lojas, artistas. 18 de Abril.",
  openGraph: {
    title: "MEGA - Campeonato Pokemon TCG | Aracati",
    description: "Entrada grátis. Campeonato com inscrição R$ 10 + lanche para competidores. 18 de Abril em Aracati - CE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${exo2.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
