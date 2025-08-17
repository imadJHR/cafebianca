import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

// Assuming these images are imported correctly in your project
import image1 from "../assets/hero.jpg";
import image2 from "../assets/logo.jpg";
import image3 from "../assets/logo.jpg";
import image4 from "../assets/logo.jpg";

const VisiterNous = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
  ref={ref}
  initial="hidden"
  animate={inView ? "show" : "hidden"}
  variants={staggerContainer}
  className="relative h-screen flex items-center justify-center bg-[#006638] overflow-hidden"
>
  {/* Animated Background Shapes */}
  <motion.div
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: 1, rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="absolute w-[200%] h-[200%] bg-gradient-to-r from-[#004225] to-[#006638] opacity-30"
    style={{ borderRadius: "50%" }}
  />
  <motion.div
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: 1, rotate: -360 }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className="absolute w-[150%] h-[150%] bg-gradient-to-r from-[#004225] to-[#006638] opacity-20"
    style={{ borderRadius: "50%" }}
  />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center">
    <motion.h1
      variants={fadeInUp}
      className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
    >
      Visitez-nous
    </motion.h1>
    <motion.p
      variants={fadeInUp}
      className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto"
    >
      Une expérience culinaire exceptionnelle vous attend
    </motion.p>
  </div>

  {/* Animated Floating Circles */}
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      initial={{ y: 0, x: Math.random() * 100 - 50, scale: 0 }}
      animate={{
        y: [0, 100, 0],
        x: Math.random() * 100 - 50,
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      className="absolute w-8 h-8 bg-white/20 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}

  {/* Animated Scroll Indicator */}
  <motion.div
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 1,
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <svg
      className="w-8 h-8 text-white"
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
</motion.section>

      {/* Gallery Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 md:py-24 px-4 bg-gray-50"
      >
        <div className="container mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-800"
          >
            Notre Espace
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ImageCard
              src={image4 || "/placeholder.svg?height=600&width=400"}
              title="Notre Restaurant"
              description="Un cadre élégant et raffiné"
            />
            <ImageCard
              src={image2 || "/placeholder.svg?height=600&width=400"}
              title="Notre Cuisine"
              description="Des plats préparés avec passion"
            />
            <ImageCard
              src={image3 || "/placeholder.svg?height=600&width=400"}
              title="Notre Ambiance"
              description="Une atmosphère chaleureuse"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 md:py-24 px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #004225, #006638)",
        }}
      >
        {/* Animated Background Bubbles */}
        <AnimatedBubbles />

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Une Expérience Unique
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-12">
              Découvrez notre établissement et laissez-vous porter par une
              ambiance unique, des saveurs exceptionnelles et un service
              attentionné.
            </p>
            <motion.a
              href="https://www.instagram.com/labrioche_restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#006638] px-6 md:px-8 py-3 md:py-4 rounded-full
                      hover:bg-[#006638] hover:text-white border-2 border-white transition-all duration-300
                      transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-medium">Suivez-nous sur Instagram</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Localization Section */}
      <motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={staggerContainer}
  className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-gray-50"
>
  <div className="container mx-auto">
    <motion.h2
      variants={fadeInUp}
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-[#006638]"
    >
      Nous Trouver
    </motion.h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Map Section */}
      <motion.div
        variants={fadeInUp}
        className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.54170733580384!2d-7.651528915069193!3d33.51692157283409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d00ed867405%3A0xc83d0579351c65d0!2sG88X%2BRCQ%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1740135896832!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl"
        ></iframe>
      </motion.div>

      {/* Info Cards Section */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col justify-center space-y-8"
      >
        <InfoCard
          icon={<MapPin className="w-8 h-8 text-[#006638]" />}
          title="Adresse"
          content="Lotissement Faraj N 100 Sidi Maarouf - Casablanca"
          className="hover:bg-gradient-to-r from-white to-gray-100"
        />
        <InfoCard
          icon={<Phone className="w-8 h-8 text-[#006638]" />}
          title="Téléphone"
          content="+212 6 64 71 00 74"
          className="hover:bg-gradient-to-r from-white to-gray-100"
        />
        <InfoCard
          icon={<Clock className="w-8 h-8 text-[#006638]" />}
          title="Horaires d'ouverture"
          content="Lundi - Dimanche: 7h - 22h"
          className="hover:bg-gradient-to-r from-white to-gray-100"
        />
      </motion.div>
    </div>
  </div>
</motion.section>
    </div>
  );
};

const ImageCard = ({ src, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={src || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const InfoCard = ({ icon, title, content, className }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`p-6 rounded-xl bg-white shadow-md flex items-center space-x-6 transition-all duration-300 ${className}`}
  >
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

const AnimatedBubbles = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white opacity-10"
        style={{
          width: `${Math.random() * 100 + 20}px`,
          height: `${Math.random() * 100 + 20}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0],
          scale: [1, Math.random() * 0.5 + 0.5, 1],
          opacity: [0.1, Math.random() * 0.3 + 0.1, 0.1],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export default VisiterNous;
