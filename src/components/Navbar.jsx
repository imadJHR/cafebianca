"use client";

import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, ArrowRight, Menu as MenuIcon } from "lucide-react";
import { memo } from "react";

// --- Main Navbar Component ---

export default function Navbar({ cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Optimized scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Offres", href: "/plat-du-jour" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contactez-nous" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "" : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div
          className={`container mx-auto transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`flex items-center justify-between px-4 py-2 ${
              isScrolled
                ? "bg-white/80 backdrop-blur-xl rounded-full border border-white/20 shadow-lg"
                : ""
            }`}
          >
            <Logo />
            <DesktopNav navLinks={navLinks} isScrolled={isScrolled} />
            <NavActions
              cartCount={cartCount}
              isScrolled={isScrolled}
              onMenuToggle={toggleMenu}
            />
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu navLinks={navLinks} closeMenu={closeMenu} />
        )}
      </AnimatePresence>
    </>
  );
}

// --- Subcomponents for better organization ---

const Logo = memo(() => (
  <Link to="/" className="flex-shrink-0">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2"
    >
      <img
        src="/logo.jpg"
        alt="Restaurant Logo"
        className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-[#006638] to-[#00a15c] bg-clip-text text-transparent hidden sm:block">
        La Brioche
      </span>
    </motion.div>
  </Link>
));

const DesktopNav = memo(({ navLinks, isScrolled }) => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="hidden lg:flex items-center gap-2">
      {navLinks.map((link) => {
        const isCurrentPage = location.pathname === link.href;
        return (
          <Link
            key={link.name}
            to={link.href}
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isCurrentPage && (
              <motion.span
                layoutId="activePill"
                className="absolute inset-0 bg-emerald-600/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {hoveredLink === link.href && !isCurrentPage && (
              <motion.span
                layoutId="hoverPill"
                className="absolute inset-0 bg-gray-500/10 rounded-full"
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              />
            )}
            <span className="relative">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
});

const NavActions = memo(({ cartCount, isScrolled, onMenuToggle }) => (
  <div className="flex items-center gap-3">
    <Link to="/commander">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          isScrolled
            ? "bg-[#006638] text-white"
            : "bg-white text-[#006638]"
        }`}
      >
        Commander
      </motion.button>
    </Link>
    <Link to="/panier" className="relative">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <ShoppingBag
          className={`transition-colors duration-300 ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
        />
        {cartCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
          >
            {cartCount}
          </motion.span>
        )}
      </motion.div>
    </Link>
    <div className="lg:hidden">
      <motion.button
        onClick={onMenuToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open menu"
      >
        <MenuIcon
          className={`transition-colors duration-300 ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
        />
      </motion.button>
    </div>
  </div>
));

// --- Immersive Mobile Menu Component ---

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    transition: { when: "afterChildren" },
  },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const MobileMenu = ({ navLinks, closeMenu }) => {
  const location = useLocation();

  return (
    <motion.div
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center lg:hidden"
    >
      <motion.button
        onClick={closeMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-5 right-5 text-white"
        aria-label="Close menu"
      >
        <X size={30} />
      </motion.button>
      
      <ul className="text-center space-y-4">
        {navLinks.map((link) => {
          const isCurrentPage = location.pathname === link.href;
          return (
            <motion.li key={link.name} variants={mobileLinkVariants}>
              <Link
                to={link.href}
                onClick={closeMenu}
                className={`text-3xl font-semibold transition-colors duration-300 ${
                  isCurrentPage ? "text-emerald-400" : "text-white hover:text-emerald-300"
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};