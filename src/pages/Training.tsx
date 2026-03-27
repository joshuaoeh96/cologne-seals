import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const Training = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-energy font-bold text-sm uppercase tracking-widest">Training</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 mb-6">Training & Spielen</h1>
          <p className="text-lg text-muted-foreground">
            Unser Trainingsbetrieb befindet sich im Aufbau – aber du kannst jetzt schon mitspielen!
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-energy/10 text-energy p-3 rounded-xl"><Clock className="h-6 w-6" /></div>
            <h2 className="text-2xl font-bold">Aktueller Stand</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            Wir organisieren aktuell unsere Sessions über WhatsApp und bieten Kurse über den UniSport Köln an. Feste Trainingszeiten und -orte sind in Planung.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-sand rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="h-5 w-5 text-turf" />
                <h3 className="font-bold">WhatsApp Gruppe</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Tritt unserer Gruppe bei und erfahre, wann und wo wir spielen.</p>
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

        <div className="bg-gradient-to-br from-turf to-turf/80 rounded-2xl p-8 sm:p-12 text-turf-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Bald: Feste Trainingszeiten</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Wir arbeiten an festen Zeiten und Orten für regelmäßiges Training. Bleib über unsere Kanäle auf dem Laufenden!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Training;
