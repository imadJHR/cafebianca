import { motion } from "framer-motion"
import menu from "../assets/menu.jpg" // Adjust the path to your image

export default function MenuPage() {
  // Extract relevant sections from the menu data
  const menuSections = {
    pizzas: [
      { name: "Margherita", ingredients: "tomate, mozza, basilic", price: 85 },
      {
        name: "Classique",
        ingredients: "tomate, mozza, viande hachée, origan",
        price: 105,
      },
      {
        name: "Casablanca",
        ingredients: "crème, artichaut, poulet, épinards",
        price: 120,
      },
      {
        name: "Bianca",
        ingredients: "crème, mozza, poulet, jb de dinde, champignons, origan",
        price: 120,
      },
      {
        name: "Chicago",
        ingredients: "tomate, mozza, salami, merguez, poivrons, origan",
        price: 110,
      },
      {
        name: "Mare",
        ingredients: "tomate, mozza, gambas, moules, calamars, origan",
        price: 120,
      },
      {
        name: "Spicy Gambas",
        ingredients: "crème au parmesan, poireaux, gambas, piment, ciboulette",
        price: 120,
      },
      {
        name: "Tonton",
        ingredients: "tomate, mozza, thon, câpres, oignons, origan",
        price: 95,
      },
      {
        name: "César",
        ingredients: "poulet, mozza, salade, tomates confites, câpres, sauce césar",
        price: 105,
      },
      {
        name: "Capricciosa",
        ingredients: "tomate, mozza, viande hachée, champignons, poivrons, origan, olives",
        price: 110,
      },
      {
        name: "Tartufo",
        ingredients: "crème, truffe, mozza, roquette, parmesan",
        price: 135,
      },
      {
        name: "Ortolana",
        ingredients: "tomate, mozza, légumes grillés, roquette",
        price: 115,
      },
      {
        name: "Saumon",
        ingredients: "crème, épinards, saumon fumé, parmesan",
        price: 125,
      },
      {
        name: "Quatre Saisons",
        ingredients: "Classique, Mare, Ortolana, César",
        price: 120,
      },
      { name: "Dégustation (hors truffe)", price: 125 },
    ],
    asian: [
      { name: "Maki (6pc) Saumon", price: 40 },
      { name: "Maki (6pc) Saumon avocat/Saumon cheese", price: 40 },
      { name: "Maki (6pc) Thon", price: 40 },
      { name: "Maki (6pc) Kani", price: 35 },
      { name: "Maki (6pc) Avocat", price: 35 },
      {
        name: "Harumaki (8pc) Saumon mangue, surimi, avocat, cream cheese",
        price: 75,
      },
      {
        name: "Harumaki (8pc) Gambas mangue, surimi, avocat, cream cheese",
        price: 75,
      },
      {
        name: "Harumaki (8pc) Thon mangue, surimi, avocat, cream cheese",
        price: 80,
      },
      { name: "Nigiri (2pc) Saumon / Thon", price: 40 },
      { name: "Nigiri (2pc) Kani", price: 35 },
      { name: "Nigiri (2pc) Avocat", price: 35 },
      { name: "Sashimi (4pc) Saumon/Thon", price: 50 },
      { name: "Gunkan (2pc) Saumon", price: 40 },
      { name: "Gunkan (2pc) Spicy Tuna" },
      { name: "Gunkan (2pc) Crabe" },
      { name: "Temaki (2pc) Saumon", price: 70 },
      { name: "Temaki (2pc) Gambas" },
      { name: "California (4pc) Saumon", price: 55 },
      { name: "California (4pc) Cheese", price: 55 },
      { name: "California (4pc) Spicy Tuna", price: 55 },
      { name: "California (4pc) Ebi Crunchy", price: 55 },
      {
        name: "Special (8pc)",
        ingredients:
          "Spicy Tuna thon pimenté, concombre, wakame, teriyaki, oignons frits Dynamite ebi fry, concombre, avocat, spicy mayo, teriyaki Huacaína ebi, avocat, cheese, sauce huacaína Boston ebi fry, cheese, spicy mayo Monster ebi fry, crabe, cheese, avocat, teriyaki Bianca saumon, avocat, oignons frits, spicy mayo, teriyaki Piña saumon, avocat, cheese, surimi, ananas, spicy mayo, teriyaki Savage saumon pimenté, ebi, avocat, sésame, sauce tonkatsu Burlesk ebi fry, crabe, cheese, emmental, poireaux, sauce anguille",
        price: 130,
      },
      { name: "Plateaux (sélection du chef) Original 12pc", price: 170 },
      { name: "Plateaux (sélection du chef) Classic 16pc", price: 215 },
      { name: "Plateaux (sélection du chef) Friendly 30pc", price: 365 },
    ],
    mains: [
      {
        name: "Émincé de Poulet",
        ingredients: "champignons, crème fraîche",
        price: 165,
      },
      { name: "Entrecôte Maître d'Hôtel 300g", price: 270 },
      { name: "Milanaise", price: 180 },
      {
        name: "Émincé de Filet de Boeuf",
        ingredients: "champignons",
        price: 245,
      },
      { name: "À la plancha : Saint Pierre", price: 230 },
      { name: "À la plancha : Saumon", price: 245 },
    ],
    tapas: [
      { name: "Nems 6pc", options: "poulet/mixte", price: [65, 75] },
      {
        name: "Rouleaux de printemps 8pc",
        options: "vegan/poulet/gambas",
        price: [55, 65, 75],
      },
      {
        name: "Toasts au thon",
        ingredients: "olives, câpres, oignons, poivrons, herbes, spicy cocktail",
        price: 60,
      },
      {
        name: "Avocado Toast Classic/Saumon",
        ingredients: "pain complet, tomates cerises, oeuf dur, pesto",
        price: [105, 125],
      },
      {
        name: "Quesadillas",
        options: "poulet/viande hachée",
        price: [105, 115],
      },
      { name: "Guacamole and chips", price: 60 },
      { name: "Saumon fumé aux câpres", price: 130 },
      { name: "Gambas Pil Pil", price: 115 },
    ],
    starters: [
      { name: "Burrata", ingredients: "tomates, pesto, focaccia", price: 140 },
      {
        name: "Bowl Bun",
        options: "Poulet/Boeuf/Gambas",
        ingredients: "vermicelle, nems, concombres, carottes, oignons, cacahuètes",
        price: [135, 145, 155],
      },
      {
        name: "Carpaccio de Boeuf",
        ingredients: "parmesan, roquette, pesto",
        price: 95,
      },
      {
        name: "César",
        options: "Poulet/Gambas",
        ingredients: "romaine, tomates, croûtons, parmesan",
        price: [95, 105],
      },
      {
        name: "Niçoise",
        ingredients: "thon, tomates, haricots verts, oeuf dur, poivrons, pommes de terre, radis, mesclun, olives",
        price: 110,
      },
      {
        name: "Gourmande",
        ingredients: "fruits de mer, thon, avocat, tomates, mozzarella, concombre, carotte, mesclun, pesto",
        price: 120,
      },
      {
        name: "Fraicheur de Quinoa",
        ingredients: "feta, concombre, oignons, poivrons, tomates, roquette, olives, origan, coriandre",
        price: 115,
      },
      {
        name: "Marinade de Fruits de Mer",
        ingredients:
          "calamars, gambas, moules, tomates, basilic, avocat, concombre, oignons, coriandre, vinaigrette chili",
        price: 140,
      },
      {
        name: "Italienne",
        ingredients: "mesclun, penne, thon, tomates, parmesan, pesto, roquette, basilic",
        price: 95,
      },
    ],
    crepesSalees: [
      { name: "Forestière", price: 115 },
      { name: "Parisienne", price: 105 },
      { name: "Saumon épinards", price: 125 },
    ],
    sandwiches: [
      {
        name: "Tuna",
        ingredients: "œuf, tomates, cornichons, câpres, romaine, spicy cocktail",
        price: 105,
      },
      {
        name: "César",
        ingredients: "poulet, mozza, tomates, oignons, romaine, sauce césar",
        price: 110,
      },
      {
        name: "Chicken Parma",
        ingredients: "poulet pané, sauce tomate, mozza, roquette, pesto",
        price: 115,
      },
      {
        name: "Cheese Steak",
        ingredients: "bœuf, emmental, champignons, oignons, poivrons, sauce cocktail",
        price: 140,
      },
      {
        name: "Marin",
        ingredients: "gambas panées, emmental, tomates, oignons, cornichons, sauce tartare",
        price: 125,
      },
      {
        name: "Bianca",
        ingredients: "saumon fumé, avocat, œuf, concombre, tomates, romaine, sauce aux câpres",
        price: 140,
      },
    ],
    burgersEtWraps: [
      {
        name: "Cheese Burger",
        ingredients: "bun maison, viande hachée, tomate, oignons, cheddar, cornichons, sauce bianca",
        price: 115,
      },
      {
        name: "Chicken Burger",
        ingredients: "bun maison, poulet pané, tomate, concombre, cheddar, sweet chili",
        price: 110,
      },
      {
        name: "Chicken Wrap",
        ingredients: "poulet pané, tomate, cornichons, avocat, sauce relish",
        price: 110,
      },
      {
        name: "Gambas Crispy Wrap",
        ingredients: "gambas panées, avocat, tomate, cornichons, romaine, sauce tartare",
        price: 125,
      },
      {
        name: "Mini Burgers",
        ingredients: "buns maison, viande hachée, cheddar, sauce cocktail",
        price: 115,
      },
    ],
    pastas: [
      {
        name: "Linguine Saumon",
        ingredients: "crème fraîche, saumon, aneth",
        price: 170,
      },
      {
        name: "Linguine Fruits de Mer",
        ingredients: "fruits de mer, sauce provençale, basilic",
        price: 180,
      },
      {
        name: "Penne Bianca",
        ingredients: "poulet, jambon de dinde, champignons, crème fraîche",
        price: 120,
      },
      {
        name: "Penne Thon",
        ingredients: "tomate, thon, olives, câpres",
        price: 105,
      },
      {
        name: "Tortiglioni Arabiatta",
        ingredients: "tomate, piquant",
        price: 95,
      },
      {
        name: "Tortiglioni Truffe",
        ingredients: "crème, champignons, parmesan",
        price: 160,
      },
      {
        name: "Spaghetti Bolognaise",
        ingredients: "tomate, viande hachée",
        price: 115,
      },
    ],
    formulesRapides: [
      {
        name: "L'Express",
        price: 95,
        description: "boisson chaude au choix + jus frais pressé + pain, beurre, confiture + 4 mini viennoiseries",
      },
      {
        name: "Le Parisien",
        price: 105,
        description:
          "boisson chaude au choix + jus frais pressé + omelette au choix (hors khlii) + pain, beurre, confiture, jben, olives + 3 mini viennoiseries",
      },
      {
        name: "Le Beldi",
        price: 105,
        description:
          "boisson chaude au choix + jus frais pressé + msemen, baghrir, harcha + oeufs au khlii + pain, beurre, jben, olives",
      },
    ],
    formulesBrunch: [
      {
        name: "Le Bénédicte",
        price: [125, 130, 135],
        description:
          "jambon / avocat / saumon fumé + boisson chaude au choix + jus frais pressé ou détox + oeufs bénédicte + coupe de fruits frais",
      },
      {
        name: "Le Scandinave",
        price: 125,
        description:
          "boisson chaude au choix + jus frais pressé ou détox + tartine gourmande saumon fumé + banana bread, Nutella",
      },
      {
        name: "Le Brunchy",
        price: 125,
        description:
          "boisson chaude au choix + jus frais pressé ou détox + omelette au choix (hors khlii) + croque jambon fromage + pain, beurre, confiture, jben + pancakes ou mini crêpes + coupe de fruits frais",
      },
      {
        name: "Le British",
        price: 135,
        description: "boisson chaude au choix + jus frais pressé ou détox + assiette anglaise + coupe de fruits frais",
      },
      {
        name: "Le Healthy",
        price: 125,
        description: "boisson chaude au choix + jus frais pressé ou détox + grilled cheese + coupe de fruits frais",
      },
      {
        name: "Le Green",
        price: 125,
        description: "boisson chaude au choix + jus frais pressé ou détox + avocado toast + coupe de fruits frais",
      },
    ],
    sweets: [
      {
        name: "Banana Split",
        ingredients: "banane, glace vanille chocolat, coulis de chocolat, chantilly",
        price: 75,
      },
      {
        name: "Melba",
        ingredients: "fruits de saison, glace vanille, chocolat, chantilly",
        price: 75,
      },
      {
        name: "Dame Blanche",
        ingredients: "glace vanille, coulis de chocolat, chantilly",
        price: 70,
      },
      {
        name: "Chocolat Liégeois",
        ingredients: "glace chocolat, chantilly",
        price: 65,
      },
      {
        name: "Glaces et Sorbets 2pc",
        ingredients:
          "chocolat, caramel beurre salé, nougatine, vanille, fraise, citron, citron gingembre, oreo, chocolat blanc",
        price: 55,
      },
    ],
    pastries: [
      { name: "Profiteroles", price: 80 },
      { name: "Mille-feuille minute", price: 80 },
      { name: "Tarte fine aux pommes", price: 80 },
      { name: "Fondant au chocolat", price: 80 },
      { name: "Brioche perdue", price: 80 },
      { name: "Café gourmand", price: 80 },
      { name: "American pancakes", price: 80 },
      { name: "Plateau de patisseries", price: 80 },
    ],
    gaufresCrepes: [
      {
        name: "Crêpe Papardelle Oreo",
        ingredients: "nutella, oreo, framboise, myrtille, glace oreo",
        price: 80,
      },
      {
        name: "Citrus",
        ingredients: "crème citron, menthe, meringue, sorbet citron/gingembre",
        price: 80,
      },
      {
        name: "Bianca",
        ingredients: "praliné, ganache et glace chocolat blanc, framboise, noisettes",
        price: 80,
      },
      {
        name: "Côte d'Ivoire",
        ingredients: "nutella, banane, glace nougatine, KitKat Ball",
        price: 80,
      },
      {
        name: "Au choix",
        ingredients: "chocolat, nutella, sucre, caramel beurre salé, citron",
        price: 60,
      },
    ],
    drinks: {
      hot: [
        { name: "Expresso / Deca / Américain", price: 30, category: "hot" },
        { name: "Capuccino / Nouss Nouss", price: 30, category: "hot" },
        { name: "Café crème / Viennois", price: [30, 35], category: "hot" },
        { name: "Café Noisette / Café Spéculos", price: 40, category: "hot" },
        { name: "Caramel Macchiato", price: 40, category: "hot" },
        { name: "Chococino", price: 40, category: "hot" },
        { name: "Chocolat chaud / Viennois", price: [35, 40], category: "hot" },
        { name: "Thé à la Menthe", price: 30, category: "hot" },
        { name: "Thé Tchaba", price: 38, category: "hot" },
      ],
      cold: [
        { name: "Sidi Ali", price: [25, 40], category: "cold" },
        { name: "Oulmès", price: [25, 40], category: "cold" },
        { name: "Red Bull", price: 50, category: "cold" },
        { name: "San Pellegrino", price: [40, 50], category: "cold" },
        { name: "Iced Coffee aromatisé", price: 40, category: "cold" },
        { name: "Mochastretto", price: 40, category: "cold" },
        { name: "Ice Tea Maison Pêche/Citron", price: 40, category: "cold" },
        { name: "Sodas", price: 30, category: "cold" },
      ],
      detox: [
        { name: "Green Basile", ingredients: "brocoli, ananas, orange, basilic", price: 55, category: "detox" },
        { name: "Vitaminé", ingredients: "carotte, gingembre, ananas, orange", price: 55, category: "detox" },
        { name: "Bloody Barba", ingredients: "betterave, céleri, mangue", price: 55, category: "detox" },
        {
          name: "Sour Popeye",
          ingredients: "concombre, citron, gingembre, pomme, épinard",
          price: 55,
          category: "detox",
        },
        { name: "Tropical", ingredients: "ananas, kiwi, mangue", price: 55, category: "detox" },
      ],
      milkSmooth: [
        { name: "Red Smoothie", price: 50, category: "milkSmooth" },
        { name: "Exotic Smoothie", price: 50, category: "milkSmooth" },
        {
          name: "Jus Frais Pressé",
          ingredients: "orange/citron/carotte/banane/pomme/tomate",
          price: 45,
          category: "milkSmooth",
        },
        {
          name: "Jus Frais Pressé",
          ingredients: "avocat/fruits secs/fraise/mangue/ananas/ginger",
          price: 55,
          category: "milkSmooth",
        },
        { name: "Milk Shake", ingredients: "vanille/chocolat/fraise/banane/oreo", price: 55, category: "milkSmooth" },
      ],
      beers: [
        { name: "Spéciale Gold", price: 40, category: "beers" },
        { name: "Heineken/Casablanca/Corona/Smirnoff", price: 60, category: "beers" },
        { name: "Budweiser/San Miguel/sans alcool", price: 60, category: "beers" },
      ],
      cocktails: [
        { name: "Margarita", price: 90, category: "cocktails" },
        { name: "Mojito", price: 90, category: "cocktails" },
        { name: "Negroni", price: 90, category: "cocktails" },
        { name: "Caipirinha", price: 90, category: "cocktails" },
        { name: "Cosmopolitan", price: 90, category: "cocktails" },
        { name: "Espresso Martini", price: 90, category: "cocktails" },
        { name: "Porn Star", price: 90, category: "cocktails" },
        { name: "Aperol Spritz", price: 90, category: "cocktails" },
        { name: "Cucumber Martini", price: 90, category: "cocktails" },
        { name: "Bellini", price: 90, category: "cocktails" },
      ],
      byTheGlass: [
        { name: "Ricard", price: 90, category: "byTheGlass" },
        { name: "Jack Daniel's/Honey", price: 100, category: "byTheGlass" },
        { name: "Gentleman Jack", price: 100, category: "byTheGlass" },
        { name: "Hendrick's", price: 100, category: "byTheGlass" },
        { name: "Black Label", price: 100, category: "byTheGlass" },
        { name: "Chivas", price: 100, category: "byTheGlass" },
        { name: "Grey Goose", price: 100, category: "byTheGlass" },
        { name: "Martini", price: 80, category: "byTheGlass" },
        { name: "Get 27", price: 80, category: "byTheGlass" },
        { name: "Bombay Sapphire/Gordon", price: 100, category: "byTheGlass" },
        { name: "Malibu", price: 80, category: "byTheGlass" },
        { name: "Vins du Bistro", price: 70, category: "byTheGlass" },
        { name: "Minuty, Chablis, Brouilly", price: 90, category: "byTheGlass" },
      ],
      wineChampagne: {
        blanc: [
          {
            name: "Vins du Bistro",
            price: 280,
            category: "wineChampagne",
            type: "blanc",
          },
          {
            name: "S de Siroua",
            price: 320,
            category: "wineChampagne",
            type: "blanc",
          },
          {
            name: "Chablis",
            price: [280, 400],
            category: "wineChampagne",
            type: "blanc",
          },
          { name: "Médaillon", price: 280 },
          {
            name: "Casillero Diablo",
            price: 400,
            category: "wineChampagne",
            type: "blanc",
          },
        ],
        rosé: [
          {
            name: "Vins du Bistro",
            price: 280,
            category: "wineChampagne",
            type: "rosé",
          },
          {
            name: "Mateus",
            price: 290,
            category: "wineChampagne",
            type: "rosé",
          },
          {
            name: "Médaillon",
            price: 270,
            category: "wineChampagne",
            type: "rosé",
          },
          {
            name: "Manon",
            price: 380,
            category: "wineChampagne",
            type: "rosé",
          },
          {
            name: "M de Minuty",
            price: 390,
            category: "wineChampagne",
            type: "rosé",
          },
        ],
        rouge: [
          {
            name: "Vins du Bistro",
            price: 280,
            category: "wineChampagne",
            type: "rouge",
          },
          {
            name: "S de Siroua",
            price: 320,
            category: "wineChampagne",
            type: "rouge",
          },
          {
            name: "Brouilly",
            price: [220, 400],
            category: "wineChampagne",
            type: "rouge",
          },
          { name: "Médaillon", price: 280, category: "wineChampagne" },
          {
            name: "Mouton Cadet",
            price: 470,
            category: "wineChampagne",
            type: "rouge",
          },
        ],
        bulles: [
          {
            name: "Laurent Perrier Brut 18.7cl",
            price: 250,
            category: "wineChampagne",
            type: "bulles",
          },
          {
            name: "Laurent Perrier Brut 37.5cl",
            price: 600,
            category: "wineChampagne",
            type: "bulles",
          },
          {
            name: "Laurent Perrier Brut 75cl",
            price: 1200,
            category: "wineChampagne",
            type: "bulles",
          },
          {
            name: "Laurent Perrier Rosé 75 cl",
            price: 2000,
            category: "wineChampagne",
            type: "bulles",
          },
        ],
      },
    },
  }

  return (
    <div className="min-h-screen">
    {/* Hero Section */}
    <div
      className="h-[40vh] sm:h-[50vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${menu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-serif relative z-10">
        Notre menu
      </h1>
    </div>

    {/* Menu Section */}
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {Object.entries(menuSections).map(([category, items]) => (
          <section key={category} className="mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl font-serif text-[#722f37] mb-6 md:mb-8"
            >
              {category.toUpperCase()}
            </motion.h2>
            <div className="space-y-6 md:space-y-8">
              {category === "drinks"
                ? Object.entries(items).map(([subCategory, subItems]) => (
                    <div key={subCategory}>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#722f37] mb-3 md:mb-4">
                        {subCategory.toUpperCase()}
                      </h3>
                      {Array.isArray(subItems)
                        ? subItems.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group cursor-pointer mb-3 md:mb-4"
                            >
                              <div className="flex justify-between items-start">
                                <h4 className="text-lg sm:text-xl font-serif text-cream group-hover:text-golden transition-colors">
                                  {item.name}
                                </h4>
                                <span className="text-golden font-serif ml-4">
                                  {Array.isArray(item.price) ? `${item.price[0]}-${item.price[1]}` : item.price} Dh
                                </span>
                              </div>
                              {item.ingredients && (
                                <p className="text-cream/80 mt-1 text-sm leading-relaxed">
                                  {item.ingredients}
                                </p>
                              )}
                            </motion.div>
                          ))
                        : null}
                    </div>
                  ))
                : Array.isArray(items) &&
                  items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg sm:text-xl font-serif text-cream group-hover:text-golden transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-golden font-serif ml-4">
                          {Array.isArray(item.price) ? `${item.price[0]}-${item.price[1]}` : item.price} Dh
                        </span>
                      </div>
                      {item.ingredients && (
                        <p className="text-cream/80 mt-1 text-sm leading-relaxed">
                          {item.ingredients}
                        </p>
                      )}
                    </motion.div>
                  ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </div>
  )
}

