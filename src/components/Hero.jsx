"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/athlentique3.jpg";
import PlatDuJour from "./PlatDuJour";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const navigate = useNavigate();
  const [showPlatDuJour, setShowPlatDuJour] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gray-900 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-green-600 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1,
                ease: "linear",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <img
          src={heroImage || "/placeholder.svg"}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900" />
      </motion.div>

      {!isLoading && (
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold sm:mb-6 text-white leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            CAFÉ & RESTAURANT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              LA BRIOCHE
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez une expérience culinaire unique, où tradition et
            innovation se rencontrent à Casablanca Sidimaarouf.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-base sm:text-lg font-semibold tracking-wide hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/commander")}
            >
              Commander maintenant
            </button>
          </motion.div>
        </motion.div>
      )}

      {!isLoading && (
        <>
          <motion.div
            className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
          </motion.div>

          <motion.div
            className="absolute w-full bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Marquee className="py-2 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm sm:text-base font-medium">
              <span className="mx-4">
                Profitez de notre Happy Hour de 7h à 22h !
              </span>
              <span className="mx-4">•</span>
              <span className="mx-4">Nouveaux plats ajoutés au menu !</span>
              <span className="mx-4">•</span>
              <span className="mx-4">Livraison gratuite à Sidimaarouf</span>
              <span className="mx-4">•</span>
            </Marquee>
          </motion.div>
        </>
      )}
    </div>
  );
}
