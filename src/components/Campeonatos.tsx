import { INSCRICAO_URL } from "@/config";

const premios = [
  { posicao: "Top 1", premio: "R$ 500,00", destaque: true },
  { posicao: "Top 2", premio: "R$ 250,00", destaque: true },
  { posicao: "Top 3", premio: "Produtos Pokemon TCG", destaque: false },
  { posicao: "Top 4", premio: "Produtos Pokemon TCG", destaque: false },
  { posicao: "Top 8", premio: "Premiação a definir", destaque: false },
];

export function Campeonatos() {
  return (
    <section id="campeonatos" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Campeonato Pokemon TCG
        </h2>
        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
          <p>
            O evento principal é o <span className="text-[#FFCB05] font-semibold">Campeonato de Pokemon TCG</span> (Trading Card Game). 
            Traz o teu deck construído e compete pelos melhores prémios!
          </p>
          <div className="p-5 rounded-lg border border-zinc-700 bg-[#1a1a1a] space-y-3 text-base">
            <p className="text-white font-semibold">
              <span className="text-[#FFCB05]">Vagas limitadas:</span> apenas <span className="text-[#FFCB05]">24 lugares</span> no campeonato.
            </p>
            <p>
              <span className="text-[#FFCB05] font-semibold">Inscrição no campeonato:</span> R$ 10,00 — apenas para evitar inscrições fantasmas. O evento em si é gratuito.
            </p>
            <p>
              Cada competidor inscrito recebe <span className="text-white font-medium">lanche</span>: refrigerante ou suco + salgado à escolha.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-4">Premiação</h3>
            <div className="space-y-3">
              {premios.map((p) => (
                <div
                  key={p.posicao}
                  className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-zinc-800"
                >
                  <span className="font-bold text-[#FFCB05]">{p.posicao}</span>
                  <span className={p.destaque ? "font-semibold text-white" : "text-zinc-400"}>
                    {p.premio}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 bg-[#FFCB05] text-black font-bold rounded-sm hover:bg-[#ffd93d] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Fazer inscrição
          </a>
        </div>
      </div>
    </section>
  );
}
