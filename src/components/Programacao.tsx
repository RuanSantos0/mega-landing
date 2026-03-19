const programacao = [
  { horario: "09:00", atividade: "Check-in" },
  { horario: "09:30", atividade: "Início do campeonato" },
  { horario: "13:00", atividade: "Pausa para almoço" },
  { horario: "14:00", atividade: "Retorno" },
  { horario: "—", atividade: "Horário de término não definido" },
];

export function Programacao() {
  return (
    <section id="programacao" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Programação
        </h2>
        <div className="space-y-4">
          {programacao.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-4 bg-black border-l-4 border-[#FFCB05] rounded-r-sm"
            >
              <span className="text-[#FFCB05] font-bold min-w-[80px]">
                {item.horario}
              </span>
              <span className="text-zinc-300">{item.atividade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
