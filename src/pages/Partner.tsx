import Layout from "@/components/Layout";

const Partner = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Netzwerk</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Partner & Kooperationen</h1>
          <p className="text-lg text-muted-foreground">Gemeinsam machen wir Footvolley groß.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Paradox", desc: "Unser Merch-Partner für hochwertige Vereinskleidung.", type: "Merch" },
            { name: "Footvolley Germany", desc: "Der deutsche Footvolley-Verband.", type: "Verband" },
            { name: "Landessportbund NRW", desc: "Mitglied im Landessportbund.", type: "Verband" },
          ].map((p) => (
            <div key={p.name} className="bg-card rounded-2xl p-8 border border-border">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{p.type}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Partner;
