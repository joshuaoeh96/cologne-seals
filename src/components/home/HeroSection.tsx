import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-footvolley.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Footvolley Action in Köln" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
    </div>
    <div className="relative container-tight section-padding !py-24 sm:!py-32">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-block bg-energy text-energy-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Köln · Footvolley · Community
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] text-primary-foreground mb-6">
          Footvolley<br />in Köln.
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-lg">
          Werde Teil der ersten Footvolley-Community in Köln. Egal ob Anfänger:in oder Fortgeschrittene – komm vorbei und spiel mit uns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/mitglied-werden">
            <Button size="lg" className="bg-energy text-energy-foreground hover:bg-energy/90 rounded-full px-8 font-bold text-base h-14 gap-2">
              Jetzt mitmachen <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/training">
            <Button size="lg" variant="outline" className="rounded-full px-8 font-bold text-base h-14 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Training ausprobieren
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
