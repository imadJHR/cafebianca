import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import vid1 from "../assets/video1.mp4";
import { ChevronRight, Star, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WelcomeModern = () => {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-restaurant-cream rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-restaurant-green rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
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
            <div className="flex items-center space-x-2">
              <Star className="text-[#722f37] w-5 h-5" />
              <span className="text-[#722f37] font-playfair text-sm tracking-widest">
                EXCELLENCE CULINAIRE
              </span>
            </div>

            <h2 className="font-playfair text-4xl lg:text-5xl xl:text-6xl text-[#722f37] leading-tight">
              Une Expérience Gastronomique Inoubliable
            </h2>
            <p className="text-[#722f37] text-lg max-w-xl">
              Le Café Bianca est le nouveau salon de thé et apéritif lounge de
              l’hôtel Villa Blanca, petits déjeuners copieux, déjeuners à
              l’italienne, cafés gourmands, et after-work ambiancés, complète
              votre journée.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="text-[#722f37] w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#722f37]">Horaires</h3>
                  <p className="text-[#722f37]">de 7h à 23h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#722f37] w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#722f37]">Adresse</h3>
                  <p className="text-[#722f37]">
                    {" "}
                    Boulevard de la Corniche, Casablanca
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/réservez">
                <motion.button
                  className="group bg-[#722f37] text-white px-8 py-3 rounded-full hover:bg-restaurant-green/90 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  RÉSERVER MAINTENANT
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/menu">
                <motion.button
                  className="border-2 border-restaurant-green text-[#722f37] px-8 py-3 rounded-full hover:bg-[#722f37] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  NOTRE CARTE
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="space-y-4">
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img1}
                  alt="Plat italien"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img2}
                  alt="Ambiance restaurant"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="space-y-4 mt-8">
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img3}
                  alt="Cuisine italienne"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img4}
                  alt="Détail plat"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Video Section */}
            <motion.div
              className="col-span-2 mt-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden h-96">
                <motion.video
                  controls
                  muted
                  loop
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <source src={vid1} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeModern;
