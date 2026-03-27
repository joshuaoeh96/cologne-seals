import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <div className="bg-gradient-to-br from-energy to-[hsl(35,100%,55%)] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-energy-foreground">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
          Bereit für den Sand?
        </h2>
        <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-lg mx-auto">
          Meld dich an, komm zum Training und werde Teil unserer Community. Egal ob Anfänger:in oder Profi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/mitglied-werden">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-bold text-base h-14 gap-2">
              Mitglied werden <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/training">
            <Button size="lg" variant="outline" className="rounded-full px-8 font-bold text-base h-14 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Erstmal reinschauen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
