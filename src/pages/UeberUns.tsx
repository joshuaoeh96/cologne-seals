import Layout from "@/components/Layout";
import communityImg from "@/assets/community.jpg";

const UeberUns = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-turf font-bold text-sm uppercase tracking-widest">Über uns</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Cologne Seals e.V.</h1>
          <p className="text-lg text-muted-foreground">
            Der erste gemeinnützige Footvolley-Verein in Köln. Gegründet 2025 mit einer klaren Mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img src={communityImg} alt="Cologne Seals Team" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={720} />
          <div>
            <h2 className="text-3xl font-bold mb-4">Unsere Mission</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Footvolley in Köln und der Region etablieren. Wir wollen einen Ort schaffen, an dem sich Menschen durch Sport verbinden – offen, inklusiv und voller Energie.
            </p>
            <h2 className="text-3xl font-bold mb-4 mt-8">Unsere Vision</h2>
            <p className="text-muted-foreground text-lg">
              Köln als Footvolley-Hotspot in Deutschland. Mit einer starken Community, regelmäßigen Turnieren und einer Liga, die für alle offen ist.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { title: "Ausbildungsverein", desc: "Wir bilden Spieler:innen und Übungsleiter:innen aus." },
            { title: "Gemeinnützig", desc: "Offiziell anerkannter gemeinnütziger Verein." },
            { title: "Vernetzt", desc: "Mitglied bei Footvolley Germany und LSB." },
            { title: "Kooperativ", desc: "Zusammenarbeit mit anderen Vereinen in der Region." },
          ].map((item) => (
            <div key={item.title} className="bg-sand rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default UeberUns;
