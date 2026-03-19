export function Localizacao() {
  const endereco = "Av. Cel. Alexanzito, 800 - Centro, Aracati - CE";
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(endereco)}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`;

  return (
    <section id="localizacao" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Localização
        </h2>
        <p className="text-zinc-400 mb-6 text-lg">
          Av. Cel. Alexanzito, 800 - Centro, Aracati - CE
        </p>
        <div className="rounded-lg overflow-hidden border border-zinc-800 h-[400px] md:h-[450px]">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do evento MEGA - Aracati"
          />
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#FFCB05] text-black font-bold rounded-sm hover:bg-[#ffd93d] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Abrir no Google Maps
        </a>
      </div>
    </section>
  );
}
