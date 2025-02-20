import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.jpg";
import contact4 from "../assets/contact4.jpg";
import contact5 from "../assets/contact5.jpg";
import contact6 from "../assets/contact6.jpg";
import menu from "../assets/contacthero.jpg"

// Assuming these images are in your public folder
const images = [contact3, contact4, contact5, contact6];

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simule un chargement de 1 seconde
    return () => clearTimeout(timer);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  // Animation controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Trigger animations when sections come into view
  if (inView1) controls1.start({ opacity: 1, x: 0 });
  if (inView2) controls2.start({ opacity: 1, x: 0 });
  if (inView3) controls3.start({ opacity: 1, y: 0 });
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
    <div className="min-h-screen relative  text-[#722f37]">
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
           CONTACTEZ-NOUS

           </h1>
         </div>
      {/* Header */}
      <header className="text-center ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl mt-16 font-bold text-[#722f37]"
        ></motion.h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Contact Form Section */}
        <section className="mb-16 md:mb-20" ref={ref1}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls1}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex items-center justify-center"
            >
              <img
                src={contact1}
                alt="Contact"
                className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={controls1}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 mt-8 md:mt-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#f4f4f4] text-[#722f37] placeholder-[#722f37] focus:outline-none focus:ring-2 focus:ring-[#b4975a] transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#f4f4f4] text-[#722f37] placeholder-[#722f37] focus:outline-none focus:ring-2 focus:ring-[#b4975a] transition-all"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 rounded-lg bg-[#f4f4f4] text-[#722f37] placeholder-[#722f37] focus:outline-none focus:ring-2 focus:ring-[#b4975a] transition-all"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#b4975a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#722f37] transition-colors duration-300"
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Office Section */}
        <section className="mb-16 md:mb-20" ref={ref2}>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={controls2}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex items-center justify-center"
            >
              <img
                src={contact2}
                alt="Our Office"
                className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls2}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 mt-8 md:mt-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                CAFÉ BIANCA
              </h2>
              <p className="mb-6 text-base md:text-lg">
                Venez nous rendre visite dans notre café chaleureux et élégant.
                Nous serons ravis de vous accueillir pour partager un moment
                convivial autour d'une tasse de café ou pour discuter de vos
                envies culinaires. Chez Café Bianca, chaque visite est une
                expérience unique et savoureuse.
              </p>
              <address className="not-italic text-base md:text-lg">
                <p className="mb-2">Téléphone: +212 5 22 39 71 61</p>
                <p>Email: resa@villablanca.ma</p>
              </address>
            </motion.div>
          </div>
        </section>

        {/* Instagram Section with Swiper */}
        <section className="mb-16 md:mb-20" ref={ref3}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Retrouvez-nous sur Instagram
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls3}
            transition={{ duration: 0.6 }}
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              {images.map((image, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Instagram post ${i + 1}`}
                      className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <div className="text-center mt-8 md:mt-10">
            <motion.a
              href="https://www.instagram.com/cafebiancasa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[#b4975a] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#722f37] transition-colors duration-300 text-sm md:text-base"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              Suivez-nous sur Instagram
            </motion.a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 md:py-8 text-center bg-[#ede8da]">
        <p className="text-[#722f37] text-sm md:text-base">
          &copy; 2025 CAFÉ BIANCA. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
