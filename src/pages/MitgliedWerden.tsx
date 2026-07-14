import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const MitgliedWerden = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Mitmachen</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Mitglied werden</h1>
          <p className="text-lg text-muted-foreground">
            Werde Teil der Cologne Seals Community. Egal ob aktiv auf dem Platz oder als Unterstützer:in – jede:r ist willkommen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Studierende</h3>
            <div className="text-4xl font-black text-energy mb-1">10€<span className="text-lg text-muted-foreground font-normal"> / Monat</span></div>
            <p className="text-muted-foreground mb-6">Vergünstigter Beitrag mit Nachweis</p>
            <ul className="space-y-3 mb-8">
              {["Zugang zu allen Trainings", "Kölsche Liga Teilnahme", "Community Events", "Vereinsshirt"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-turf flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="https://formular.vereinsplaner.com/15c4718f-93fb-41b4-9380-291042c5ef81" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-energy text-energy-foreground hover:bg-energy/90 rounded-full font-bold h-12 gap-2">
                Jetzt anmelden <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="bg-card rounded-2xl p-8 border-2 border-energy shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-energy text-energy-foreground text-xs font-bold px-3 py-1 rounded-full">Beliebt</div>
            <h3 className="text-2xl font-bold mb-2">Erwachsene</h3>
            <div className="text-4xl font-black text-energy mb-1">20€<span className="text-lg text-muted-foreground font-normal"> / Monat</span></div>
            <p className="text-muted-foreground mb-6">Aktive Mitgliedschaft</p>
            <ul className="space-y-3 mb-8">
              {["Zugang zu allen Trainings", "Kölsche Liga Teilnahme", "Community Events", "Vereinsshirt", "Stimmrecht bei Versammlungen"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-turf flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="https://formular.vereinsplaner.com/15c4718f-93fb-41b4-9380-291042c5ef81" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-energy text-energy-foreground hover:bg-energy/90 rounded-full font-bold h-12 gap-2">
                Jetzt anmelden <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-sand rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Passive Mitgliedschaft</h3>
          <p className="text-muted-foreground mb-4">Du willst uns unterstützen, ohne aktiv zu spielen? Werde passives Mitglied und hilf uns, Footvolley in Köln wachsen zu lassen.</p>
          <a href="https://formular.vereinsplaner.com/15c4718f-93fb-41b4-9380-291042c5ef81" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full px-6 font-semibold">Passiv beitreten</Button>
          </a>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <img src={communityImg} alt="Community" className="rounded-2xl shadow-xl" loading="lazy" width={1280} height={720} />
          <div>
            <h3 className="text-2xl font-bold mb-4">So funktioniert's</h3>
            <ol className="space-y-4">
              {[
                "Melde dich über den Vereinsplaner an.",
                "Komm zum nächsten Training – wir freuen uns auf dich!",
                "Werde Teil der Community und spiel mit.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-energy text-energy-foreground rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted-foreground bg-card border border-border rounded-xl p-4">
              💡 <strong>Hinweis:</strong> Bitte melde dich vorab über den Vereinsplaner für Trainings an, damit wir besser planen können.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default MitgliedWerden;
