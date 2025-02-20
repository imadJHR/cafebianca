import { useState, useEffect } from "react";
import menu from "../assets/equipehero.jpg"

const teamMembers = [
  {
    id: 1,
    name: "Alessandro Rossi",
    position: "Chef Cuisinier",
    imageUrl:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Passionné par la cuisine italienne depuis son enfance, Alessandro apporte une touche d'authenticité à chaque plat.",
  },
  {
    id: 2,
    name: "Sofia Bianchi",
    position: "Directrice de Restaurant",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681057-5d61ca0e5364?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Avec une expérience de plus de 10 ans dans la gestion de restaurants, Sofia veille à ce que chaque client vive une expérience inoubliable.",
  },
  {
    id: 3,
    name: "Marco Ferrari",
    position: "Sommelier",
    imageUrl:
      "https://images.unsplash.com/photo-1508214794186-ea65a7cbca70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert en vins italiens, Marco saura vous conseiller le meilleur accord mets et vins pour sublimer votre repas.",
  },
];

const NotreEquipe = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simule un chargement de 1 seconde
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center  justify-center h-screen relative">
        <div className="relative">
          {/* Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 md:h-32 md:w-32 border-t-2 border-b-2 border-primary"></div>

          {/* Texte au centre (ne tourne pas) */}
          <div className="absolute italic inset-0 flex items-center justify-center text-primary font-semibold">
            CAFÉ BIANCA
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ede8da] transition-colors duration-300">
       <div
                 className="h-[40vh] sm:h-[50vh] relative flex items-center justify-center"
                 style={{
                   backgroundImage: `url(${menu})`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                 }}
               >
                 <div className="absolute inset-0 bg-black/50" />
                 <h1 className="text-4xl uppercase sm:text-5xl md:text-7xl text-white font-serif relative z-10">
                 notre équipe
      
                 </h1>
               </div>
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-colors duration-300">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="rounded-2xl object-cover h-64 w-full mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-xl font-semibold text-restaurant-green dark:text-restaurant-cream transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 transition-colors duration-300">
        {member.position}
      </p>
      <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">
        {member.bio}
      </p>
    </div>
  );
};

export default NotreEquipe;
