import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";

const LigaHighlight = () => (
  <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 right-10 w-96 h-96 bg-energy rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-turf rounded-full blur-3xl" />
    </div>
    <div className="container-tight relative">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-energy text-energy-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Highlight
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6">
          Kölsche Footvolley Liga
        </h2>
        <p className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto">
          Die offene Liga für alle – Anfänger:innen und Fortgeschrittene spielen zusammen. Kein Vereinsmitglied? Kein Problem.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { icon: Users, label: "Offen für alle" },
            { icon: Star, label: "Kein Mitglied nötig" },
            { icon: Zap, label: "Jedes Level" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-primary-foreground/80">
              <f.icon className="h-5 w-5 text-energy" />
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>
        <Link to="/koelsche-liga">
          <Button size="lg" className="bg-energy text-energy-foreground hover:bg-energy/90 rounded-full px-8 font-bold text-base h-14 gap-2">
            Zur Kölschen Liga <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default LigaHighlight;
