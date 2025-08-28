import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Filter, X, ChevronDown } from "lucide-react";
// Import food items from data.js
import foodItems from "../data.js";

const Menu = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

 
  const categories = [...new Set(foodItems.map((item) => item.category))];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const drawerVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // SEO metadata
  const title = selectedCategory
    ? `Menu - ${
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
      }`
    : "Notre délicieux menu";
  const description = `Découvrez notre menu comprenant ${categories.join(
    ", "
  )}. Commandez maintenant !`;

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 md:h-24 md:w-24 border-t-4 border-b-4 border-emerald-700"></div>
          <div className="absolute inset-0 flex items-center justify-center text-emerald-700 font-semibold italic">
            La Brioche
          </div>
        </div>
      </div>
    );
  }

  // Filtered items
  const filteredItems = foodItems.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen mt-26 bg-white">
      {/* SEO - Would use Next/Head or React Helmet in a real app */}
      <div style={{ display: "none" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </div>

      {/* Sticky Header with Categories */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-30 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-2xl font-bold ${
                scrolled
                  ? "text-emerald-700 font-serif"
                  : "font-serif text-emerald-800"
              }`}
            >
              La Brioche
            </motion.h2>

            {/* Desktop Categories */}
            <div className="hidden md:flex flex-wrap mt-26 justify-center gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-1.5 rounded-full font-medium transition-all duration-200 text-sm
                  ${
                    !selectedCategory
                      ? "bg-emerald-700 text-white shadow-md"
                      : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"
                  }`}
              >
                Tous
              </motion.button>

              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all duration-200 text-sm
                    ${
                      selectedCategory === category
                        ? "bg-emerald-700 text-white shadow-md"
                        : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden w-full flex justify-between items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-emerald-200 text-emerald-700 rounded-full shadow-sm"
              >
                <Filter className="w-4 h-4" />
                <span>Catégories</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>

              {selectedCategory && (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(null)}
                  className="px-3 py-1 text-emerald-700 text-sm font-medium"
                >
                  Voir tout
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-emerald-900 text-white"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Savourez l'Excellence
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Des ingrédients frais, des recettes authentiques, une expérience
              inoubliable
            </p>

            {selectedCategory && (
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}
              </div>
            )}
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Menu Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg?height=300&width=400"}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category Tag */}
                <div
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full
                              text-xs font-medium shadow-sm"
                >
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </div>

                {/* Special Badge */}
                {item.isSpecial && (
                  <div
                    className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full
                                text-xs font-medium shadow-sm"
                  >
                    Spécial
                  </div>
                )}

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0
                              group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="p-5">
                <h3
                  className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700
                             transition-colors duration-300"
                >
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-700">
                    {item.price} Dh
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white rounded-full
                             hover:bg-emerald-800 transition-colors duration-300 text-sm font-medium"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-4"
          >
            <div className="max-w-md mx-auto">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="No items found"
                className="w-32 h-32 mx-auto mb-6 opacity-50"
              />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Aucun plat trouvé
              </h3>
              <p className="text-gray-500 mb-6">
                Nous n'avons pas encore de plats dans cette catégorie.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
              >
                Voir tout le menu
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 md:hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Filtrer par catégorie
                </h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-2 max-h-[50vh] overflow-y-auto pb-6">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedCategory(null);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl font-medium text-left transition-all duration-300
                    ${
                      !selectedCategory
                        ? "bg-emerald-700 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  Tous les plats
                </motion.button>

                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full px-4 py-3 rounded-xl font-medium text-left transition-all duration-300
                      ${
                        selectedCategory === category
                          ? "bg-emerald-700 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-30">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFilterOpen(true)}
          className="w-12 h-12 rounded-full bg-emerald-700 text-white shadow-lg flex items-center justify-center"
        >
          <Filter className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Menu;
