import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Confirmation = () => {
  const location = useLocation();
  const { fullName, date, time, guests, occasion } = location.state || {};

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, rotateX: 10, rotateY: 10 },
    tap: { scale: 0.95, rotateX: -5, rotateY: -5 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ perspective: '1000px' }}
      >
        <motion.h1
          className="text-3xl font-bold text-[#006638] mb-4"
          variants={itemVariants}
        >
          Réservation Confirmée !
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          variants={itemVariants}
        >
          Merci, <span className="font-semibold text-[#006638]">{fullName}</span>, votre table a été réservée.
        </motion.p>
        <motion.div
          className="mt-6 space-y-2 text-gray-600"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            <span className="font-medium">Date :</span> {date}
          </motion.p>
          <motion.p variants={itemVariants}>
            <span className="font-medium">Heure :</span> {time}
          </motion.p>
          <motion.p variants={itemVariants}>
            <span className="font-medium">Nombre de convives :</span> {guests}
          </motion.p>
          <motion.p variants={itemVariants}>
            <span className="font-medium">Occasion :</span> {occasion}
          </motion.p>
        </motion.div>
        <motion.button
          onClick={() => (window.location.href = '/')}
          className="mt-6 px-6 py-2 bg-[#006638] text-white rounded-md hover:bg-[#004225] transition-colors duration-200"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ transformStyle: 'preserve-3d' }}
        >
          Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Confirmation;