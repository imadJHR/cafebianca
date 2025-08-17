import React from 'react';
import { motion } from "framer-motion";

const Map = () => {
  // Casablanca Sidi Maarouf coordinates (using a Google Maps embed)
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.542341532093!2d-7.6586573!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd45c38d619f%3A0x844976bad4c54f0!2sSidi%20Maarouf%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1702477939926";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-custom-green-light to-custom-green-dark rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* Overlay with modern design */}
      <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-sm">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-custom-green-light mb-3"
        >
          Retrouvez-nous ici
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-700 text-lg"
        >
          Sidi Maarouf, Casablanca
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-4"
        >
          <a
            href="https://maps.google.com?q=Sidi+Maarouf,+Casablanca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-custom-green-light text-white rounded-lg font-semibold hover:bg-custom-green-dark transition-all duration-300"
          >
            <span>Ouvrir dans Google Maps</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Map Container */}
      <div className="overflow-hidden rounded-3xl">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location in Sidi Maarouf"
          className="opacity-90 hover:opacity-100 transition-opacity duration-300"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Map;
