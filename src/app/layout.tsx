import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo" });

export const metadata: Metadata = {
  title: "MEGA - Campeonato Pokemon TCG | Aracati",
  description: "Campeonato Pokemon TCG, área de trocas, lojas, área kids, Nintendo Switch e muito mais. 18 de Abril em Aracati - CE.",
  openGraph: {
    title: "MEGA - Evento de Gaming e Tecnologia",
    description: "O maior evento de gaming e tecnologia. Próximo evento: 18 de Abril.",
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
