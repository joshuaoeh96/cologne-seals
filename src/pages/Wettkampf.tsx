import Layout from "@/components/Layout";
import { Trophy, Globe, ArrowRight } from "lucide-react";

const Wettkampf = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Wettkampf</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Wettkampf & Internationales</h1>
          <p className="text-lg text-muted-foreground">Von der Kölner Community auf die internationale Bühne.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="inline-flex p-3 rounded-xl bg-energy/10 text-energy mb-4"><Trophy className="h-6 w-6" /></div>
            <h3 className="text-2xl font-bold mb-3">Nationale Turniere</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• League of Champions</li>
              <li>• Deutschland Ranking</li>
              <li>• Regionale Turniere</li>
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="inline-flex p-3 rounded-xl bg-turf/10 text-turf mb-4"><Globe className="h-6 w-6" /></div>
            <h3 className="text-2xl font-bold mb-3">Internationale Szene</h3>
            <p className="text-muted-foreground">
              Footvolley verbindet – von Köln nach Brasilien, Portugal und in die ganze Welt. Wir bringen unsere Spieler:innen auf internationale Events.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Wettkampf;
