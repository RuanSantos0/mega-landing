import Link from "next/link";
import { Logo } from "./Logo";
import { INSCRICAO_URL } from "@/config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a0a2e]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-pulse-lines" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="relative">
          <Logo width={280} height={140} priority />
        </div>
        <div className="space-y-2">
          <p className="text-lg md:text-xl font-semibold tracking-widest text-[#FFCB05] uppercase">
            Campeonato Pokemon TCG
          </p>
          <p className="text-3xl md:text-5xl font-black tracking-tight">
            18 de Abril
          </p>
          <p className="text-zinc-400 text-sm md:text-base">
            Av. Cel. Alexanzito, 800 - Centro, Aracati - CE
          </p>
          <p className="text-[#FFCB05]/90 text-sm md:text-base font-medium">
            Entrada gratuita · Inscrição no campeonato: R$ 10 (evita vagas fantasmas) + lanche para competidores
          </p>
          <p className="text-white text-sm md:text-base font-bold tracking-wide border border-[#FFCB05]/60 rounded px-4 py-2 bg-black/40">
            Limite de <span className="text-[#FFCB05]">24 vagas</span> no campeonato — garante a tua inscrição
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
          <a
            href={INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFCB05] text-black font-bold rounded-sm hover:bg-[#ffd93d] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Fazer inscrição
          </a>
          <Link
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#FFCB05] text-[#FFCB05] font-bold rounded-sm hover:bg-[#FFCB05] hover:text-black transition-colors"
          >
            <span className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-current" />
            Saber mais
          </Link>
          <Link
            href="#localizacao"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-black transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Como chegar
          </Link>
          <a
            href="https://instagram.com/mega.expo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white font-bold rounded-sm hover:bg-white hover:text-black transition-colors"
          >
            @mega.expo
          </a>
        </div>
      </div>
    </section>
  );
}
