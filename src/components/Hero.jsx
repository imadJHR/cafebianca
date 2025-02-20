import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import heroImage from "../assets/hero.jpg"

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f0]">
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />

      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#722f37] to-[#ede8da]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CAFÉ BIANCA
        </motion.h1>

        <motion.p
          className="text-[#ede8da] text-xl sm:text-2xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Plongez dans une expérience culinaire italienne unique, où tradition et innovation se rencontrent dans chaque assiette.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/réservez">
            <motion.button
              className="px-8 py-4 bg-[#722f37] text-white rounded-full text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver une Table
            </motion.button>
          </Link>
          <Link to="/menu">
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-[#722f37] text-[#722f37] rounded-full text-lg font-semibold tracking-wide hover:bg-[#722f37] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir le Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  )
}

const LoadingAnimation = () => (
  <div className="flex items-center justify-center h-screen bg-[#722f37]">
    <motion.div
      className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#f5f5f0]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      CAFÉ BIANCA
    </motion.div>
  </div>
)

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
  >
    <svg
      className="w-6 h-6 text-[#722f37]"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </motion.div>
)

export default Hero