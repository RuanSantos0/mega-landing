const noticias = [
  {
    id: 1,
    titulo: "Campeonato Pokemon TCG em Aracati",
    data: "19 Mar 2025",
    resumo: "O MEGA traz o primeiro campeonato oficial de Pokemon TCG para Aracati. Apenas 24 vagas — garante a tua inscrição!",
  },
  {
    id: 2,
    titulo: "Área de trocas e lojas confirmadas",
    data: "15 Mar 2025",
    resumo: "Colecionadores terão espaço dedicado para trocas e lojas com produtos exclusivos de Pokemon TCG.",
  },
  {
    id: 3,
    titulo: "Exibição de artistas confirmada",
    data: "12 Mar 2025",
    resumo: "O evento contará com exposição de trabalhos de artistas locais inspirados no universo Pokemon.",
  },
];

export function Noticias() {
  return (
    <section id="noticias" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Notícias
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="group p-6 bg-[#1a1a1a] border border-zinc-800 rounded-sm hover:border-[#FFCB05]/50 transition-colors"
            >
              <p className="text-sm text-[#FFCB05] mb-2">{noticia.data}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFCB05] transition-colors">
                {noticia.titulo}
              </h3>
              <p className="text-zinc-400">{noticia.resumo}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
