"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import img1 from "../assets/1.webp"
import img2 from "../assets/athlentique1.jpg"
import img3 from "../assets/athlentique2.jpg"
import img4 from "../assets/athlentique3.jpg"

const AuthenticityItalian = () => {
  const images = [
    { src: img1, alt: "" },
    { src: img2, alt: "" },
    { src: img3, alt: "" },
    { src: img4, alt: "" },
  ]

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const bgCream = "#fffdf8"
  const primaryColor = "#006638"

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-cream" style={{ backgroundColor: bgCream }}>
      <BackgroundDecorations primaryColor={primaryColor} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center mb-12 text-primary"
          style={{ color: primaryColor }}
        >
          Authenticité Italienne
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {images.map((img, index) => (
            <ImageCard key={index} img={img} index={index} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="text-center mt-12 text-gray-700 max-w-2xl mx-auto text-lg"
        >
          Découvrez l'essence même de l'Italie à travers nos plats authentiques, préparés avec passion et des
          ingrédients de la plus haute qualité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="/menu"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-1"
            style={{ backgroundColor: primaryColor }}
          >
            Découvrir Notre Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const BackgroundDecorations = ({ primaryColor }) => (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full"
      style={{ background: primaryColor, filter: "blur(70px)" }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full"
      style={{ background: primaryColor, filter: "blur(70px)" }}
    />
  </>
)

const ImageCard = ({ img, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
  >
    <div className="relative w-full h-64 sm:h-72">
      <img
        src={img.src || "/placeholder.svg"}
        alt={img.alt}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {img.alt}
        </p>
      </div>
      <div className="scratch-effect" />
    </div>
  </motion.div>
)

export default AuthenticityItalian

