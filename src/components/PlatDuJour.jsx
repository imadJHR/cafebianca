"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"

const PlatDuJour = () => {
  const [showPlatDuJour, setShowPlatDuJour] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlatDuJour(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showPlatDuJour && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 md:w-[450px] z-50"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 shadow-2xl">
            <motion.div
              className="absolute inset-0 bg-[url('/texture.png')] opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <div className="relative p-6 sm:p-8">
              <button
                className="absolute top-2 right-2 p-2 text-white/70 hover:text-white transition-colors duration-200"
                onClick={() => setShowPlatDuJour(false)}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-white mb-4">
                  <Sparkles className="mr-2 h-6 w-6 sm:h-7 sm:w-7 text-yellow-300" />
                  Plat du Jour & Offres
                </h2>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <p className="text-emerald-100 text-base sm:text-lg mb-6">
                  Savourez notre{" "}
                  <span className="font-semibold text-yellow-300">Poulet Rôti aux Herbes de Provence</span>, accompagné
                  d'un gratin dauphinois crémeux et d'une ratatouille maison.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  className="flex-1 px-6 py-3 bg-white text-emerald-700 rounded-full text-base font-semibold tracking-wide hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                  onClick={() => navigate("/plat-du-jour")}
                >
                  Découvrir
                </button>
                <button
                  className="flex-1 px-6 py-3 bg-emerald-500 text-white rounded-full text-base font-semibold tracking-wide hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                  onClick={() => navigate("/reserver")}
                >
                  Réserver une table
                </button>
              </motion.div>

              <motion.div
                className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-tl from-emerald-400/30 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PlatDuJour

