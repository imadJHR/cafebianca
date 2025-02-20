import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";

const AuthenticityItalian = () => {
  const images = [img1, img2, img3, img4];
  
  // Observer pour l'animation des éléments
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-restaurant-cream py-20 relative overflow-hidden">
      {/* Déco en arrière-plan */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-64 h-64 bg-restaurant-green blur-3xl opacity-30 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-restaurant-green blur-3xl opacity-20 rounded-full"
      />

      {/* Section complète observée */}
      <div className="container mx-auto px-4" ref={ref}>
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl f text-center text-[#722f37]  mb-12"
        >
          Authenticité Bianca
        </motion.h2>

        {/* Galerie d'images en Zigzag */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                y: index % 2 === 0 ? -20 : 20,
              }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`Plat Italien ${index + 1}`}
                className="object-cover h-64 md:h-80 w-full transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthenticityItalian;
