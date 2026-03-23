export function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Sobre o Evento
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            O MEGA traz para Aracati o maior evento de <span className="text-[#FFCB05] font-semibold">Pokemon TCG</span> da região! 
            Um dia repleto de competição, diversão e experiências para colecionadores e jogadores.
          </p>
          <div className="p-6 rounded-lg border border-[#FFCB05]/40 bg-[#FFCB05]/10 space-y-4">
            <p className="text-white font-bold text-xl">
              Entrada no evento: totalmente gratuita
            </p>
            <p>
              O acesso ao espaço do evento é <strong className="text-white">100% grátis</strong> — podes visitar, trocar, conhecer as lojas e acompanhar o ambiente sem pagar nada.
            </p>
            <p>
              Para <strong className="text-white">competir no campeonato</strong>, o formulário de inscrição solicita uma taxa de <strong className="text-[#FFCB05]">R$ 10,00</strong>, com o <strong>único objetivo de evitar inscrições fantasmas</strong> (pessoas que se inscrevem e não comparecem), garantindo vagas a quem realmente vai jogar.
            </p>
            <p>
              <strong className="text-white">Todo competidor inscrito</strong> no campeonato tem direito a um <strong className="text-[#FFCB05]">lanche</strong>: <strong>refrigerante ou suco</strong> + <strong>salgado à tua escolha</strong>.
            </p>
          </div>
          <p>
            Além do campeonato oficial de Pokemon TCG, o evento conta com <strong>área de trocas</strong> para colecionadores, 
            <strong> lojas</strong> com produtos exclusivos, <strong>exibição de artistas</strong> e muito mais!
          </p>
          <p>
            Traz os teus decks, os teus cartões para trocar e prepara-te para um dia inesquecível no universo Pokemon.
          </p>
        </div>
      </div>
    </section>
  );
}
