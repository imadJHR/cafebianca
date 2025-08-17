"use client";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../assets/logo.jpg";
import visa from "../assets/visa.png";
import master from "../assets/master.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#006638] to-[#004a29] text-white">
      <Marquee className="bg-[#b4975a] py-3 text-[#006638] font-medium">
        <span className="mx-4">
          Profitez de notre Happy Hour de 17h à 22h !
        </span>
        <span className="mx-4">•</span>
        <span className="mx-4">Nouveaux plats ajoutés au menu !</span>
        <span className="mx-4">•</span>
        <span className="mx-4">
          Livraison gratuite pour les commandes de plus de 200 DH
        </span>
      </Marquee>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <motion.img
              src={logo}
              alt="Restaurant Logo"
              className="h-16 w-16 rounded-full mb-4 border-2 border-white/20"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <p className="text-sm text-center md:text-left mb-4">
              Découvrez une expérience culinaire unique, où tradition et
              innovation se rencontrent à Casablanca Sidimaarouf.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#b4975a] transition duration-300"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-[#b4975a] transition duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#b4975a] transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className="hover:text-[#b4975a] transition duration-300"
                >
                  Réservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Lotissement Faraj N 100 Sidi Maarouf - Casablanca</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a
                  href="tel:+212661528619"
                  className="hover:text-[#b4975a] transition duration-300"
                >
                 +212 6 64 71 00 74
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:info@labrioche.ma"
                  className="hover:text-[#b4975a] transition duration-300"
                >
                  Labriocherestaurant@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social and Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://www.instagram.com/labrioche_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Moyens de Paiement</h3>
            <div className="flex space-x-4">
              <motion.img
                src={visa}
                alt="Visa"
                className="h-8 rounded bg-white p-1"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.img
                src="https://www.cmi.co.ma/sites/default/files/logo_cmi_va.png"
                alt="CMI"
                className="h-8 rounded bg-white p-1"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.img
                src={master}
                alt="Mastercard"
                className="h-8 rounded bg-white p-1"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>
            &copy; {currentYear} Café & Restaurant La Brioche. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
