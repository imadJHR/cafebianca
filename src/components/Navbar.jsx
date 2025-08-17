"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, ArrowRight, MenuIcon } from "lucide-react";

export default function Navbar({ cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navLinks = [
    { name: "ACCUEIL", href: "/" },
    { name: "OFFRES", href: "/plat-du-jour" },
    { name: "CONTACT", href: "/contactez-nous" },
    { name: "MENU", href: "/menu" },
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-2 bg-white shadow-sm" : "py-3 bg-transparent"
      }`}
    >
      {/* Background gradient blob that follows mouse (desktop only) */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#006638]/10 via-[#00a15c]/5 to-transparent blur-3xl"
            animate={{
              x: mousePosition.x - 250,
              y: mousePosition.y - 250,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 50,
              mass: 0.5,
            }}
          />
        </motion.div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#006638] to-[#00a15c] rounded-full opacity-70 hidden sm:block"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <div className="relative bg-black rounded-full p-0.5">
                  <img
                    src="/logo.jpg"
                    alt="Logo"
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                  />
                </div>
              </div>
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold bg-gradient-to-r from-[#006638] to-[#00a15c] bg-clip-text text-transparent hidden sm:block"
              >
                RESTAURANT
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="relative bg-black/5 backdrop-blur-sm rounded-full px-2 py-1 mr-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  link={link}
                  index={index}
                  isScrolled={isScrolled}
                  onHoverStart={() => setActiveLink(index)}
                  onHoverEnd={() => setActiveLink(null)}
                  isActive={activeLink === index}
                />
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <OrderButton isScrolled={isScrolled} />
              <CartIcon cartCount={cartCount} isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-3">
            <CartIcon cartCount={cartCount} isScrolled={isScrolled} />
            <OrderButton isScrolled={isScrolled} mobile />
            <MenuToggle
              isOpen={isMenuOpen}
              toggle={() => setIsMenuOpen(!isMenuOpen)}
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            cartCount={cartCount}
            closeMenu={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

const NavLink = ({
  link,
  index,
  isScrolled,
  onHoverStart,
  onHoverEnd,
  isActive,
}) => {
  const location = useLocation();
  const isCurrentPage = location.pathname === link.href;

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative inline-block"
    >
      <Link
        to={link.href}
        className={`relative px-3 py-2 font-medium text-sm tracking-wide transition-all duration-300 rounded-full inline-block ${
          isScrolled ? "text-gray-800" : "text-white"
        } ${isCurrentPage ? "font-semibold" : ""}`}
      >
        {isActive && (
          <motion.div
            layoutId="navBackground"
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 uppercase">{link.name}</span>
      </Link>
      {isCurrentPage && (
        <motion.div
          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#006638] rounded-full"
          layoutId="activeIndicator"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          style={{ x: "-50%" }}
        />
      )}
    </motion.div>
  );
};

const OrderButton = ({ isScrolled, mobile = false }) => (
  <motion.div
    whileHover={{ scale: mobile ? 1 : 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative ${mobile ? "lg:hidden" : "hidden lg:block"}`}
  >
    <Link
      to="/commander"
      className={`relative overflow-hidden group flex items-center ${
        isScrolled
          ? "bg-[#006638] text-white"
          : mobile
          ? "bg-[#006638] text-white"
          : "bg-white text-[#006638]"
      } px-4 py-2 rounded-full font-medium text-sm tracking-wide`}
    >
      <span className="relative z-10">COMMANDER</span>
      {!mobile && (
        <motion.div
          className="relative z-10 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: [0, 4, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <ArrowRight size={16} />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 bg-black/10 w-0 group-hover:w-full transition-all duration-500"
        style={{ originX: 0 }}
      />
    </Link>
  </motion.div>
);

const CartIcon = ({ cartCount, isScrolled }) => (
  <Link to="/panier" className="relative group">
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <div
        className={`p-2 rounded-full ${
          isScrolled ? "bg-gray-100" : "bg-white/20 backdrop-blur-sm"
        }`}
      >
        <ShoppingBag
          className={isScrolled ? "text-gray-800" : "text-white"}
          size={18}
        />
      </div>
      {cartCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`absolute -top-1 -right-1 ${
            isScrolled ? "bg-[#006638]" : "bg-white"
          } ${
            isScrolled ? "text-white" : "text-[#006638]"
          } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold`}
        >
          {cartCount}
        </motion.div>
      )}
    </motion.div>
  </Link>
);

const MenuToggle = ({ isOpen, toggle, isScrolled }) => (
  <motion.button
    onClick={toggle}
    className={`p-2 rounded-full z-50 ${
      isOpen
        ? "bg-[#006638] text-white"
        : isScrolled
        ? "bg-gray-100 text-gray-800"
        : "bg-white/20 text-white backdrop-blur-sm"
    }`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
  </motion.button>
);

const MobileMenu = ({ navLinks, cartCount, closeMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeMenu}
      />

      {/* Menu content */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white flex flex-col shadow-xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="flex flex-col h-full p-5">
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center"
            >
              <div className="relative bg-black rounded-full p-0.5">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <span className="ml-3 text-lg font-bold text-[#006638]">
                RESTAURANT
              </span>
            </Link>
            <motion.button
              onClick={closeMenu}
              className="p-2 rounded-full bg-gray-100 text-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="flex-1 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <MobileNavLink
                key={link.name}
                link={link}
                index={index}
                closeMenu={closeMenu}
              />
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <Link
                to="/panier"
                onClick={closeMenu}
                className="flex items-center text-gray-700 hover:text-[#006638]"
              >
                <ShoppingBag className="mr-2" size={18} />
                <span>Panier</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-[#006638] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
            <Link
              to="/commander"
              onClick={closeMenu}
              className="flex items-center justify-center w-full bg-[#006638] text-white py-3 px-5 rounded-lg font-semibold text-base"
            >
              COMMANDER
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileNavLink = ({ link, index, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === link.href;

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.1 }}
      className="w-full"
    >
      <Link
        to={link.href}
        onClick={closeMenu}
        className={`relative flex items-center w-full px-4 py-3 ${
          isActive ? "text-[#006638] font-semibold" : "text-gray-700"
        } rounded-lg hover:bg-gray-100 transition-all`}
      >
        <span className="text-base">{link.name}</span>
        {isActive && (
          <motion.div
            layoutId="mobileActiveIndicator"
            className="absolute left-0 top-1/2 w-1 h-6 bg-[#006638] rounded-r-full"
            style={{ y: "-50%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    </motion.div>
  );
};