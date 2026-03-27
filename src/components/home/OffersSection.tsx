import { Link } from "react-router-dom";
import { Trophy, Users, Dumbbell, Handshake, ArrowRight } from "lucide-react";

const offers = [
  {
    icon: Dumbbell,
    title: "Training",
    desc: "Offene Sessions für alle Level. Komm einfach vorbei.",
    href: "/training",
    color: "bg-energy/10 text-energy",
  },
  {
    icon: Trophy,
    title: "Kölsche Liga",
    desc: "Die offene Footvolley-Liga in Köln. Kein Mitglied nötig.",
    href: "/koelsche-liga",
    color: "bg-turf/10 text-turf",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Events, Beach-Sessions und gemeinsame Turniere.",
    href: "/mitglied-werden",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Handshake,
    title: "Für Vereine",
    desc: "Wir helfen euch, Footvolley in eurem Verein aufzubauen.",
    href: "/fuer-vereine",
    color: "bg-energy/10 text-energy",
  },
];

const OffersSection = () => (
  <section className="section-padding bg-sand">
    <div className="container-tight">
      <div className="text-center mb-12">
        <span className="text-energy font-bold text-sm uppercase tracking-widest">Angebote</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2">Was wir bieten</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <Link
            key={offer.title}
            to={offer.href}
            className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`inline-flex p-3 rounded-xl mb-4 ${offer.color}`}>
              <offer.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{offer.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-energy group-hover:gap-2 transition-all">
              Mehr erfahren <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;
