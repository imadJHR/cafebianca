"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Instagram } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import contact1 from "../assets/logo.jpg"
import contact2 from "../assets/logo.jpg"
import contact3 from "../assets/logo.jpg"
import contact4 from "../assets/logo.jpg"
import contact5 from "../assets/logo.jpg"
import contact6 from "../assets/logo.jpg"
import menu from "../assets/logo.jpg"
import { Helmet } from "react-helmet"

// Assuming these images are in your public folder
const images = [contact3, contact4, contact5, contact6]

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation() // Nouveau contrôle pour la section "À propos"

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 }) // Nouvelle référence pour la section "À propos"

  useEffect(() => {
    if (inView1) controls1.start({ opacity: 1, x: 0 })
    if (inView2) controls2.start({ opacity: 1, x: 0 })
    if (inView3) controls3.start({ opacity: 1, y: 0 })
    if (inView4) controls4.start({ opacity: 1, y: 0 }) // Animation pour la section "À propos"
  }, [inView1, inView2, inView3, inView4, controls1, controls2, controls3, controls4])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen relative">
        <div className="relative">
          {/* Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 md:h-32 md:w-32 border-t-2 border-b-2 border-[#006638]"></div>

          {/* Texte au centre (ne tourne pas) */}
          <div className="absolute hidden italic inset-0 md:flex items-center justify-center text-[#006638] font-semibold">
            La Brioche
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative text-[#006638]">
      <Helmet>
        <title>Contactez La Brioche - Votre café à Sidimaarouf</title>
        <meta
          name="description"
          content="Contactez La Brioche pour toute question, réservation ou information. Visitez notre café chaleureux et élégant à Casablanca."
        />
        <meta property="og:title" content="Contactez La Brioche - Votre café à Casablanca" />
        <meta
          property="og:description"
          content="Contactez La Brioche pour toute question, réservation ou information. Visitez notre café chaleureux et élégant à Casablanca."
        />
      </Helmet>

      <div
        className="h-[30vh] sm:h-[40vh] md:h-[50vh] relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${menu})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-serif relative z-10 px-4 text-center">
          CONTACTEZ-NOUS
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <section className="mb-16 md:mb-20" ref={ref1}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls1}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex items-center justify-center"
            >
              <img
                src={contact1 || "/placeholder.svg"}
                alt="Contact"
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={controls1}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 mt-8 md:mt-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#f4f4f4] text-[#006638] placeholder-[#006638] focus:outline-none focus:ring-2 focus:ring-[#006638] transition-all"
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
                    className="w-full p-3 rounded-lg bg-[#f4f4f4] text-[#006638] placeholder-[#006638] focus:outline-none focus:ring-2 focus:ring-[#006638] transition-all"
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
                    className="w-full p-3 rounded-lg bg-[#f4f4f4] text-[#006638] placeholder-[#006638] focus:outline-none focus:ring-2 focus:ring-[#006638] transition-all"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#006638] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004225] transition-colors duration-300"
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="mb-16 md:mb-20" ref={ref2}>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={controls2}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex items-center justify-center"
            >
              <img
                src={contact2 || "/placeholder.svg"}
                alt="Our Office"
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={controls2}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 mt-8 md:mt-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">La Brioche</h2>
              <p className="mb-6 text-base md:text-lg">
                Venez nous rendre visite dans notre café & restaurant chaleureux et élégant. Nous serons ravis de vous
                accueillir pour partager un moment convivial autour d'une tasse de café ou pour discuter de vos envies
                culinaires. Chez La Brioche, chaque visite est une expérience unique et savoureuse.
              </p>
              <address className="not-italic text-base md:text-lg">
                <p className="mb-2">Téléphone: +212 6 64 71 00 74</p>
                <p>Email: resa@villablanca.ma</p>
              </address>
            </motion.div>
          </div>
        </section>

        {/* Nouvelle section "À propos" */}
        <section className="mb-16 md:mb-20" ref={ref4}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls4}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex items-center justify-center"
            >
              <img
                src={contact1 || "/placeholder.svg"}
                alt="About Us"
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls4}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 mt-8 md:mt-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">À propos de La Brioche</h2>
              <p className="mb-6 text-base md:text-lg">
                La Brioche est bien plus qu'un simple café. C'est un lieu où l'art de la pâtisserie rencontre la convivialité.
                Fondé en 2020, notre établissement s'engage à offrir des produits de qualité, préparés avec soin et passion.
                Que ce soit pour un petit-déjeuner, une pause café ou un déjeuner, nous vous accueillons dans un cadre
                chaleureux et élégant.
              </p>
              <p className="text-base md:text-lg">
                Notre mission est de créer des moments inoubliables pour nos clients, en combinant des saveurs authentiques
                et un service attentionné.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mb-16 md:mb-20" ref={ref3}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Retrouvez-nous sur Instagram</h2>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls3} transition={{ duration: 0.6 }}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                480: {
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
                  <a
                    href="https://www.instagram.com/labriochecasa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 block"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Instagram post ${i + 1}`}
                      className="w-full h-[200px] sm:h-[225px] md:h-[250px] lg:h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="w-8 h-8 text-white" />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <div className="text-center mt-8 md:mt-10">
            <motion.a
              href="https://www.instagram.com/labriochecasa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[#006638] text-white px-4 sm:px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#004225] transition-colors duration-300 text-sm md:text-base"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              Suivez-nous sur Instagram
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  )
}