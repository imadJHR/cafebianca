"use client";

import { ShoppingBag, Clock, Tag, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Assuming you use react-router for navigation

// --- Custom Hook for Countdown Logic ---
const useCountdown = (endDate) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return timeLeft;
};


// --- Main Component ---
export default function SpecialOffers({ addToCart }) {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("https://apibrioche-1.onrender.com/api/offers");
        setOffers(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des offres :", err);
        setError("Impossible de charger les offres pour le moment.");
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  
  if (offers.length === 0) {
    return <NoOffers />;
  }

  return (
    <div className="min-h-screen py-16 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-3 tracking-tight">
            Nos Offres du Jour
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Profitez de nos créations exclusives à prix réduit. Dépêchez-vous, le temps est compté !
          </p>
          <div className="mt-4 h-1 w-24 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {offers.map((item) => (
            <OfferCard key={item._id} item={item} addToCart={addToCart} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}


// --- Subcomponents ---

const OfferCard = ({ item, addToCart }) => {
  const { hours, minutes, seconds, isExpired } = useCountdown(item.endsAt);
  const imageUrl = useMemo(() => 
    item.image
      ? item.image.startsWith("http")
        ? item.image
        : `https://apibrioche-1.onrender.com${item.image}`
      : "/placeholder.svg",
    [item.image]
  );
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 blur-xl -z-10" />

      <div className="absolute top-4 left-4 z-10 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transform -rotate-3">
        <Tag className="w-4 h-4" />
        <span>Exclusivité</span>
      </div>
      
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>

        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-emerald-600">
              {item.price} Dh
            </span>
            <span className="text-lg text-gray-400 line-through">
              {item.originalPrice} Dh
            </span>
          </div>
        </div>

        {isExpired ? (
          <div className="text-center py-3 bg-gray-200 text-gray-500 font-bold rounded-lg mb-4">Offre Expirée</div>
        ) : (
          <div className="flex justify-center gap-2 sm:gap-4 mb-4 text-center">
            <CountdownUnit value={hours} label="Heures" />
            <CountdownUnit value={minutes} label="Min" />
            <CountdownUnit value={seconds} label="Sec" />
          </div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addToCart(item)}
          disabled={isExpired}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-xl transition-all duration-300 text-base font-semibold hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Ajouter au Panier</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-2xl font-bold text-gray-800 bg-gray-100 rounded-lg w-14 h-14 flex items-center justify-center">
      {String(value).padStart(2, '0')}
    </div>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);

const LoadingSkeleton = () => (
    <div className="min-h-screen py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
             <div className="text-center mb-12">
                <div className="h-12 bg-gray-200 rounded-lg w-1/2 mx-auto mb-3 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-lg w-3/4 mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg p-6">
                        <div className="h-64 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
                        <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-lg w-full mb-6 animate-pulse"></div>
                        <div className="h-12 bg-gray-200 rounded-xl w-full animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const NoOffers = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-gray-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md"
        >
            <Coffee size={80} className="mx-auto text-emerald-300 mb-4" />
            <h2 className="text-3xl font-bold text-emerald-800 mb-2">
                Aucune offre pour le moment
            </h2>
            <p className="text-gray-600 mb-6">
                Nos chefs sont en train de concocter de nouvelles surprises. Revenez un peu plus tard pour découvrir nos prochaines offres exclusives !
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                    to="/menu"
                    className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300"
                >
                    Voir notre menu
                </Link>
            </motion.div>
        </motion.div>
    </div>
);

const ErrorMessage = ({ message }) => (
    <div className="flex items-center justify-center min-h-[70vh] text-center px-4 text-red-600">
        <p>{message}</p>
    </div>
);