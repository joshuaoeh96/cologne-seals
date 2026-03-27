import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Wrench, Lightbulb } from "lucide-react";

const FuerVereine = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-turf font-bold text-sm uppercase tracking-widest">Für Vereine</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Footvolley für euren Verein</h1>
          <p className="text-lg text-muted-foreground">
            Ihr wollt Footvolley als neue Abteilung aufbauen? Wir unterstützen euch mit Know-how, Struktur und Übungsleiter:innen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Users, title: "Übungsleiter:innen", desc: "Wir stellen qualifizierte Trainer:innen für eure Sessions." },
            { icon: BookOpen, title: "Trainingsstruktur", desc: "Bewährte Konzepte für Anfänger:innen bis Fortgeschrittene." },
            { icon: Wrench, title: "Materialberatung", desc: "Welches Netz, welcher Ball? Wir beraten euch." },
            { icon: Lightbulb, title: "Know-how Transfer", desc: "Von der Gründung bis zum ersten Turnier – wir teilen unser Wissen." },
          ].map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-8 border border-border">
              <div className="inline-flex p-3 rounded-xl bg-turf/10 text-turf mb-4"><s.icon className="h-6 w-6" /></div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-turf to-turf/80 rounded-2xl p-8 sm:p-12 text-turf-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Kooperation anfragen</h2>
          <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
            Schreibt uns und wir besprechen, wie wir Footvolley in euren Verein bringen können.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-bold h-14 gap-2">
            Kontakt aufnehmen <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default FuerVereine;
