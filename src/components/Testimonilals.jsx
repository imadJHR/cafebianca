import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import avatar from "../assets/1.jpeg";

const Testimonials = () => {
  return (
    <div className="bg-restaurant-cream py-20">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <InViewMotion>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair text-[#722f37] mb-6">
              Ce que nos clients disent
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Découvrez les avis de nos clients satisfaits qui ont goûté à l'excellence de notre cuisine italienne.
            </p>
          </div>
        </InViewMotion>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <TestimonialCard
            quote="Un restaurant incroyable ! La nourriture est exquise, le service impeccable et l'ambiance chaleureuse. Je recommande vivement !"
            name="Achraf Ennebly"
            title="Client"
            avatar={avatar}
          />
          <TestimonialCard
            quote="L'expérience culinaire est exceptionnelle. Chaque plat est une explosion de saveurs. J'ai hâte d'y retourner !"
            name="Sofia Laghzaoui"
            title="Cliente fidèle"
            avatar={avatar}
          />
        </div>
      </div>
    </div>
  );
};

// Composant qui applique une animation quand l'élément devient visible
const InViewMotion = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Carte Témoignage
const TestimonialCard = ({ quote, name, title, avatar }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-restaurant-green rounded-2xl p-8 text-black shadow-lg transform transition-all duration-500 hover:scale-105"
    >
      <p className="text-lg italic mb-4">{quote}</p>
      <div className="flex items-center mt-6">
        <motion.img
          src={avatar}
          alt={name}
          className="rounded-full w-16 h-16 mr-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div>
          <h4 className="font-semibold font-playfair text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
