import { useInView } from "react-intersection-observer";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import { Instagram } from "lucide-react";

function VisiterNous() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`container mx-auto py-12 transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-#ede8da shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-[#722f37] gray-800 mb-4">
          Visitez-nous
        </h2>
        <p className="text-gray-700">
          Venez découvrir notre espace et profiter d'une expérience unique.
        </p>

        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/3 p-4">
            <img
              src={image1}
              alt="Image 1"
              className="rounded-lg shadow-md transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              src={image2}
              alt="Image 2"
              className="rounded-lg shadow-md transform -rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              src={image3}
              alt="Image 3"
              className="rounded-lg shadow-md transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>

        <a
          href="https://www.instagram.com/imad__johar/" // Remplace par ton lien Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-[#722f37] hover:scale-110 transition-transform duration-300 text-[#b4975a] font-bold py-2 px-4 rounded-lg shadow-md"
        >
          Suivez-nous sur Instagram
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default VisiterNous;
