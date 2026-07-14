import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Training", href: "/training" },
  { label: "Kölsche Liga", href: "/koelsche-liga" },
  { label: "Für Vereine", href: "/fuer-vereine" },
  { label: "Team", href: "/team" },
  { label: "Partner", href: "/partner" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container-tight section-padding !py-0 flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cologne Seals" className="h-10 w-10 sm:h-12 sm:w-12" />
          <span className="font-bold text-lg sm:text-xl tracking-tight">Cologne Seals</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-energy ${
                location.pathname === item.href ? "text-energy" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://formular.vereinsplaner.com/15c4718f-93fb-41b4-9380-291042c5ef81" target="_blank" rel="noopener noreferrer">
            <Button className="bg-energy text-energy-foreground hover:bg-energy/90 font-semibold rounded-full px-6">
              Mitglied werden
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-energy"
              >
                {item.label}
              </Link>
            ))}
            <a href="https://formular.vereinsplaner.com/15c4718f-93fb-41b4-9380-291042c5ef81" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-energy text-energy-foreground hover:bg-energy/90 font-semibold rounded-full mt-2">
                Mitglied werden
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
