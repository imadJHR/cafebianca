import { ShoppingBag, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SpecialOffers({ addToCart }) {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get("https://apibrioche-1.onrender.com/api/offers");
      console.log("Données reçues:", response.data); // Debugging

      setOffers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des offres :", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newTimeLeft = {};

      offers.forEach((item) => {
        const difference = new Date(item.endsAt).getTime() - now.getTime();
        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          newTimeLeft[item._id] = `${hours}h ${minutes}m`;
        } else {
          newTimeLeft[item._id] = "Expiré";
        }
      });

      setTimeLeft(newTimeLeft);
    }, 60000);

    return () => clearInterval(timer);
  }, [offers]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen relative">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 md:h-32 md:w-32 border-t-2 border-b-2 border-[#006638]"></div>
          <div className="absolute hidden italic inset-0 md:flex items-center justify-center text-[#006638] font-semibold">
            La Brioche
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-white rounded-3xl shadow-lg">
      <div className="container mt-16 mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          Offres Spéciales
        </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {offers.map((item) => (
            <motion.div
              key={item._id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Offre Spéciale
              </div>
              <div className="relative h-64 overflow-hidden">
              <img
  src={
    item.image
      ? item.image.startsWith("http")
        ? item.image
        : `https://apibrioche-1.onrender.com${item.image}`
      : "/placeholder.svg"
  }
  alt={item.name}
  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-t-2xl"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-[#006638] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#006638]">
                      {item.price} Dh
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {item.originalPrice} Dh
                    </span>
                  </div>
                  <div className="flex items-center text-red-500">
                    <Clock className="w-5 h-5 mr-1" />
                    <span className="font-semibold">{timeLeft[item._id]}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(item)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#006638] text-white rounded-full transition-colors duration-300 text-lg font-semibold"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Ajouter à la commande</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
