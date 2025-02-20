import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuSection = () => {
  return (
    <div className="bg-[#f5f5f0] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-playfair text-center text-[#722f37] mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aperçu Savoureux
          <motion.span
            className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 h-1 w-20 bg-[#722f37] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {menuItemsLeft.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
          <div>
            {menuItemsRight.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>

        <motion.div className="text-center mt-12" whileHover={{ scale: 1.05 }}>
          <Link to="/menu">
            <button className="group bg-[#722f37] text-[#b4975a] px-8 py-4 rounded-full hover:bg-restaurant-green/90 transition-all duration-300 inline-flex items-center">
              MENU COMPLET
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const MenuItem = ({ name, description, price }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-[#722f37]">{name}</h3>
        <span className="text-[#722f37] font-medium">{price}</span>
      </div>
      <p className="text-[#55492f] leading-relaxed">{description}</p>
      <motion.div
        className="h-0.5 bg-gray-200 mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const menuItemsLeft = [
  { name: "Margherita", description: "tomate, mozza, basilic", price: 85 },
  {
    name: "Classique",
    description: "tomate, mozza, viande hachée, origan",
    price: 105,
  },
  {
    name: "Casablanca",
    description: "crème, artichaut, poulet, épinards",
    price: 120,
  },
  {
    name: "Bianca",
    description: "crème, mozza, poulet, jb de dinde, champignons, origan",
    price: 120,
  },
  {
    name: "Chicago",
    description: "tomate, mozza, salami, merguez, poivrons, origan",
    price: 110,
  },
  {
    name: "Mare",
    description: "tomate, mozza, gambas, moules, calamars, origan",
    price: 120,
  },
];

const menuItemsRight = [
  {
    name: "Niçoise",
    description:
      "thon, tomates, haricots verts, oeuf dur, poivrons, pommes de terre, radis, mesclun, olives",
    price: 110,
  },
  {
    name: "Gourmande",
    description:
      "fruits de mer, thon, avocat, tomates, mozzarella, concombre, carotte, mesclun, pesto",
    price: 120,
  },
  {
    name: "Fraicheur de Quinoa",
    description:
      "feta, concombre, oignons, poivrons, tomates, roquette, olives, origan, coriandre",
    price: 115,
  },
  {
    name: "Marinade de Fruits de Mer",
    description:
      "calamars, gambas, moules, tomates, basilic, avocat, concombre, oignons, coriandre, vinaigrette chili",
    price: 140,
  },
  {
    name: "Italienne",
    description:
      "mesclun, penne, thon, tomates, parmesan, pesto, roquette, basilic",
    price: 95,
  },
];

export default MenuSection;
