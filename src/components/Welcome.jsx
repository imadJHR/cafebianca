import img1 from "../assets/welcome1.jpg";
import img2 from "../assets/welcome2.jpg";
import img3 from "../assets/welcome3.jpg";
import img4 from "../assets/welcome4.jpg";
import { ChevronRight, Star, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WelcomeModern = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
      {/* Animated Background Bubbles (Disabled on mobile) */}
      {window.innerWidth > 768 && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#a3cbb2] opacity-30"
              style={{
                width: `${Math.random() * 80 + 50}px`,
                height: `${Math.random() * 80 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25, 0],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 max-w-6xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex items-center space-x-3">
              <Star className="text-[#006638] w-6 h-6" />
              <span className="text-[#006638] font-semibold text-lg tracking-wide uppercase">
                Cafe & Restaurant La Brioche
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#006638] leading-tight">
              Savourez l'Excellence Italienne
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-md sm:max-w-xl">
              Découvrez un havre de paix où la tradition italienne rencontre
              l'innovation culinaire. Des petits déjeuners aux after-works,
              chaque moment est une célébration. Bienvenue au Café & Restaurant
              La Brioche, votre restaurant italien à Casablanca Sidi Maarouf.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="text-[#006638] w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#006638]">Horaires</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    7h - 22h, Tous les jours
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#006638] w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#006638]">Adresse</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Lotissement Faraj N 100 Sidi Maarouf - Casablanca
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/réservez">
                <motion.button
                  className="bg-[#006638] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#00552f] transition-all duration-300 flex items-center font-semibold"
                  whileTap={{ scale: 0.95 }}
                >
                  Réserver Maintenant
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link to="/menu">
                <motion.button
                  className="border-2 border-[#006638] text-[#006638] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#006638] hover:text-white transition-all duration-300 font-semibold"
                  whileTap={{ scale: 0.95 }}
                >
                  Découvrir le Menu
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <img src={img1} alt="Plat italien" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div
                className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <img src={img2} alt="Ambiance chaleureuse" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            </div>
            <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <motion.div
                className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <img src={img3} alt="Cuisine italienne" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
              <motion.div
                className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <img src={img4} alt="Détail plat" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeModern;
