import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Gérer le scroll pour changer le background de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsOpen(false); // Fermer le menu mobile lors du scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simuler un temps de chargement de 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return null;

  const navLinks = [
    { name: "ACCUEIL", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "CONTACTEZ-NOUS", href: "/contactez-nous" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#722f37] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl italic uppercase">
              CAFÉ BIANCA
            </Link>
          </div>

          {/* Navigation pour bureau */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-bold text-sm tracking-widest transition-colors duration-200 ${
                    isScrolled
                      ? "text-white hover:text-white"
                      : "text-white hover:text-[#722f37]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/réservez">
                <button
                  className={`px-6 py-2 rounded transition-colors duration-200 ${
                    isScrolled
                      ? "text-white bg-[#b4975a] hover:bg-white hover:text-[#722f37]"
                      : "text-white hover:text-white bg-[#722f37] hover:bg-[#b37c83]"
                  }`}
                >
                  RÉSERVATION
                </button>
              </Link>
            </div>
          </div>

          {/* Bouton du menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white hover:text-[#722f37]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation mobile */}
        <div
  className={`md:hidden fixed inset-0 bg-[#722f37]/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  } h-screen flex flex-col items-center justify-center overflow-y-auto`}
>
  <div className="absolute top-4 right-4">
    <button
      onClick={() => setIsOpen(false)}
      className="text-white hover:text-[#b4975a]"
    >
      <X size={24} />
    </button>
  </div>

  <div className="flex flex-col items-center gap-6 mt-12">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        to={link.href}
        onClick={() => setIsOpen(false)}
        className="text-white font-bold text-xl hover:text-[#b4975a] block px-6 py-3"
      >
        {link.name}
      </Link>
    ))}
    
    <Link to="/réservez">
      <button
        onClick={() => setIsOpen(false)}
        className="mt-6 text-white bg-[#b4975a] font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#722f37] transition-colors duration-200"
      >
        RÉSERVATION
      </button>
    </Link>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
