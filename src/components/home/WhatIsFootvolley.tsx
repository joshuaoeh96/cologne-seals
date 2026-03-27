import actionImg from "@/assets/footvolley-action.jpg";

const WhatIsFootvolley = () => (
  <section className="section-padding bg-card">
    <div className="container-tight">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Der Sport</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-6">
            Was ist Footvolley?
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Footvolley kombiniert Beach-Volleyball und Fußball – gespielt wird barfuß im Sand, der Ball darf nur mit Fuß, Brust und Kopf berührt werden.
          </p>
          <p className="text-muted-foreground text-lg mb-6">
            Entstanden an den Stränden Brasiliens, erobert Footvolley gerade die Welt. In Köln sind wir die Ersten, die diesen einzigartigen Sport als Verein etablieren.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "2v2", label: "Spielformat" },
              { num: "🏖️", label: "Im Sand" },
              { num: "⚽", label: "Nur mit Fuß" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 bg-sand rounded-xl">
                <div className="text-2xl font-black mb-1">{s.num}</div>
                <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={actionImg}
            alt="Footvolley Action"
            className="w-full rounded-2xl shadow-2xl"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-energy rounded-2xl -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsFootvolley;
