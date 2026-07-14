import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle, Sparkles } from "lucide-react";

const trainings = [
  {
    day: "Montag",
    time: "18:00 – 20:00 Uhr",
    location: "TPSV Bocklemünd",
    address: "Köln-Bocklemünd",
    tag: "Training",
  },
  {
    day: "Mittwoch",
    time: "18:00 – 20:00 Uhr",
    location: "TPSV Bocklemünd",
    address: "Köln-Bocklemünd",
    tag: "Training",
  },
  {
    day: "Samstag",
    time: "09:00 – 11:00 Uhr",
    location: "DJK Südwest Köln",
    address: "Sportanlage DJK Südwest",
    tag: "Probetraining empfohlen",
    highlight: true,
  },
];

const Training = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Training</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Training & Spielen</h1>
          <p className="text-lg text-muted-foreground">
            Komm einfach vorbei – wir trainieren dreimal die Woche in Köln. Für dein Probetraining ist der <strong className="text-foreground">Samstag</strong> ideal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trainings.map((t) => (
            <div
              key={t.day}
              className={`rounded-2xl p-8 border transition ${
                t.highlight
                  ? "bg-card border-energy shadow-lg relative"
                  : "bg-card border-border"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 bg-energy text-energy-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> {t.tag}
                </div>
              )}
              <div className="text-sm font-bold uppercase tracking-widest text-energy mb-2">{t.day}</div>
              <div className="flex items-center gap-2 text-2xl font-black mb-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                {t.time}
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-turf" />
                <div>
                  <div className="font-semibold text-foreground">{t.location}</div>
                  <div className="text-sm">{t.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-energy to-[hsl(35,100%,55%)] rounded-2xl p-8 sm:p-12 text-energy-foreground text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Erstmal reinschnuppern?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-6">
            Unser <strong>Samstagstraining bei DJK Südwest Köln</strong> ist perfekt zum Kennenlernen – ohne Anmeldung, ohne Vorerfahrung. Komm einfach vorbei und spiel mit.
          </p>
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 font-bold h-14 shadow-lg">
            Sag Bescheid, dass du kommst
          </Button>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-energy/10 text-energy p-3 rounded-xl"><MessageCircle className="h-6 w-6" /></div>
            <h2 className="text-2xl font-bold">Bleib auf dem Laufenden</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            Über unsere WhatsApp-Community bekommst du kurzfristige Infos zu Trainings, Spontan-Sessions und Events. Zusätzlich bieten wir Footvolley-Kurse über den UniSport Köln an.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-sand rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="h-5 w-5 text-turf" />
                <h3 className="font-bold">WhatsApp Community</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Tritt bei und erfahre, wann und wo gespielt wird.</p>
              <Button variant="outline" className="rounded-full font-semibold">Zur WhatsApp Gruppe</Button>
            </div>
            <div className="bg-sand rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-energy" />
                <h3 className="font-bold">UniSport Kurse</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Footvolley-Kurse im Rahmen des Hochschulsports Köln.</p>
              <Button variant="outline" className="rounded-full font-semibold">Zu den Kursen</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Training;

