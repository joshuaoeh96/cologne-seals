import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-tight section-padding !py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Cologne Seals" className="h-8 w-8 invert" />
            <span className="font-bold text-lg">Cologne Seals e.V.</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Footvolley in Köln. Gemeinnütziger Verein seit 2025.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/50">Verein</h4>
          <div className="space-y-2">
            <Link to="/ueber-uns" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Über uns</Link>
            <Link to="/mitglied-werden" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Mitglied werden</Link>
            <Link to="/team" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Team & Vorstand</Link>
            <Link to="/transparenz" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Transparenz</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/50">Footvolley</h4>
          <div className="space-y-2">
            <Link to="/training" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Training</Link>
            <Link to="/koelsche-liga" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Kölsche Liga</Link>
            <Link to="/fuer-vereine" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Für Vereine</Link>
            <Link to="/wettkampf" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Wettkampf</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/50">Community</h4>
          <div className="space-y-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-energy transition-colors">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <Link to="/partner" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Partner</Link>
            <Link to="/merch" className="block text-sm text-primary-foreground/70 hover:text-energy transition-colors">Merch</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Cologne Seals e.V. – Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
