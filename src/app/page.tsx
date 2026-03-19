import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Areas } from "@/components/Areas";
import { Noticias } from "@/components/Noticias";
import { Campeonatos } from "@/components/Campeonatos";
import { Programacao } from "@/components/Programacao";
import { Localizacao } from "@/components/Localizacao";
import { Contactos } from "@/components/Contactos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Areas />
        <Noticias />
        <Campeonatos />
        <Programacao />
        <Localizacao />
        <Contactos />
      </main>
    </>
  );
}
