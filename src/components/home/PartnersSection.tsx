const partners = [
  { name: "Footvolley Germany", type: "Verband" },
  { name: "Landessportbund NRW", type: "Verband" },
  { name: "Paradox", type: "Merch Partner" },
];

const PartnersSection = () => (
  <section className="section-padding bg-card">
    <div className="container-tight">
      <div className="text-center mb-12">
        <span className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Netzwerk</span>
        <h2 className="text-3xl sm:text-4xl font-black mt-2">Partner & Verbände</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((p) => (
          <div key={p.name} className="bg-sand rounded-2xl px-8 py-6 text-center min-w-[200px]">
            <div className="font-bold text-lg mb-1">{p.name}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{p.type}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
