import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, Zap, Trophy } from "lucide-react";
import ligaLogo from "@/assets/koelsche-liga-logo.png";

const KoelscheLiga = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <img src={ligaLogo} alt="Kölsche Footvolley Liga" className="h-36 sm:h-48 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Kölsche Footvolley Liga</h1>
          <p className="text-lg text-muted-foreground">
            Die offene Liga für Köln. Anfänger:innen und Fortgeschrittene spielen zusammen – kein Vereinsmitglied nötig.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, title: "Offen für alle", desc: "Du brauchst kein Vereinsmitglied zu sein." },
            { icon: Star, title: "Jedes Level", desc: "Anfänger:innen und Fortgeschrittene." },
            { icon: Zap, title: "Community", desc: "Gemeinsam spielen, feiern, wachsen." },
            { icon: Trophy, title: "Turnier-Einstieg", desc: "Der perfekte Start in die Wettkampfszene." },
          ].map((f) => (
            <div key={f.title} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="inline-flex p-3 rounded-xl bg-energy/10 text-energy mb-4"><f.icon className="h-6 w-6" /></div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Bock mitzuspielen?</h2>
          <p className="text-lg opacity-80 mb-6 max-w-xl mx-auto">Meld dich bei uns und wir nehmen dich in die nächste Runde der Kölschen Liga auf.</p>
          <Button size="lg" className="bg-energy text-energy-foreground hover:bg-energy/90 rounded-full px-8 font-bold h-14 gap-2">
            Jetzt anmelden <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default KoelscheLiga;
