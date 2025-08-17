import { motion } from "framer-motion";
    import { useInView } from "react-intersection-observer";
    import avatar from "../assets/1.webp";
    import { useSwipeable } from "react-swipeable";
    import { useState } from "react";

    const Testimonials = () => {
      // Define a modern color palette
      const bgColor = "white"; // Soft off-white
      const primaryColor = "#006638"; // Deep green
      const accentColor = "#A6CE39"; // Bright lime green
      const textColor = "#333333"; // Dark gray

      const testimonialsData = [
        {
          quote: "Un restaurant incroyable ! La nourriture est exquise, le service impeccable et l'ambiance chaleureuse. Je recommande vivement !",
          name: "Achraf Ennebly",
          title: "Client",
          avatar: avatar,
        },
        {
          quote: "L'expérience culinaire est exceptionnelle. Chaque plat est une explosion de saveurs. J'ai hâte d'y retourner !",
          name: "Sofia Laghzaoui",
          title: "Cliente fidèle",
          avatar: avatar,
        },
        {
          quote: "Another amazing experience! The food is great, the service is top-notch, and the atmosphere is cozy.",
          name: "John Doe",
          title: "Regular Customer",
          avatar: avatar,
        },
      ];

      const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

      const handleSwipe = (direction) => {
        if (direction === "left") {
          setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        } else if (direction === "right") {
          setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
        }
      };

      const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      });

      return (
        <div style={{ backgroundColor: bgColor, padding: "80px 0", overflow: "hidden" }}>
          <div className="container mx-auto px-4">
            {/* Title and Description */}
            <InViewMotion>
              <div className="text-center mb-16">
                <h2
                  className="text-4xl md:text-5xl font-playfair"
                  style={{ color: primaryColor, fontWeight: "700", marginBottom: "24px" }}
                >
                  Ce que nos clients disent
                </h2>
                <p className="leading-relaxed max-w-2xl mx-auto" style={{ color: textColor, fontSize: "1.1rem" }}>
                  Découvrez les avis de nos clients satisfaits qui ont goûté à l'excellence de notre cuisine italienne.
                </p>
              </div>
            </InViewMotion>

            {/* Testimonial Cards */}
            <div {...swipeHandlers} className="relative">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}>
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard
                      {...testimonial}
                      bgColor={bgColor}
                      primaryColor={primaryColor}
                      accentColor={accentColor}
                      textColor={textColor}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };

    // Composant qui applique une animation quand l'élément devient visible
    const InViewMotion = ({ children }) => {
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      );
    };

    // Carte Témoignage
    const TestimonialCard = ({ quote, name, title, avatar, bgColor, primaryColor, accentColor, textColor }) => {
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:scale-105"
          style={{ backgroundColor: bgColor }}
        >
          <p className="italic mb-4" style={{ color: textColor, fontSize: "1.1rem" }}>
            {quote}
          </p>
          <div className="flex items-center mt-6">
            <motion.div
              className="rounded-full w-16 h-16 mr-4 relative overflow-hidden"
              style={{ border: `3px solid ${accentColor}` }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={avatar} alt={name} className="object-cover w-full h-full" />
            </motion.div>
            <div>
              <h4 className="font-semibold font-playfair text-lg" style={{ color: primaryColor }}>
                {name}
              </h4>
              <p className="text-sm" style={{ color: textColor }}>
                {title}
              </p>
            </div>
          </div>
        </motion.div>
      );
    };

    export default Testimonials;
