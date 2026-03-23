const areas = [
  {
    id: 1,
    nome: "Campeonato Pokemon TCG",
    icone: "🎴",
    descricao: "Competição oficial de Pokemon Trading Card Game com prémios para os melhores jogadores.",
  },
  {
    id: 2,
    nome: "Área de Trocas",
    icone: "🔄",
    descricao: "Espaço dedicado para colecionadores trocarem cartas e completarem as suas coleções.",
  },
  {
    id: 3,
    nome: "Lojas Pokemon TCG",
    icone: "🛒",
    descricao: "Produtos exclusivos, boosters, decks e acessórios de Pokemon TCG.",
  },
  {
    id: 4,
    nome: "Exibição de Artistas",
    icone: "🖼️",
    descricao: "Exposição de trabalhos de artistas locais inspirados no universo Pokemon.",
  },
];

export function Areas() {
  return (
    <section id="areas" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          O que vai ter no evento
        </h2>
        <p className="text-zinc-400 mb-12 text-lg">
          Um dia repleto de atividades para colecionadores e jogadores
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div
              key={area.id}
              className="group p-6 bg-black border border-zinc-800 rounded-lg hover:border-[#FFCB05]/50 transition-all hover:shadow-lg hover:shadow-[#FFCB05]/5"
            >
              <span className="text-4xl mb-4 block">{area.icone}</span>
              <h3 className="text-xl font-bold mb-3 text-[#FFCB05] group-hover:text-[#ffd93d] transition-colors">
                {area.nome}
              </h3>
              <p className="text-zinc-400">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
