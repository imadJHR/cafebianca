import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { fullName, date, time, guests, occasion } = location.state || {};

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
        <h1 className="text-3xl font-bold text-[#722f37] gray-900 mb-4">Réservation Confirmée !</h1>
        <p className="text-lg text-[#b4975a] ">
          Merci, <span className="font-semibold text-[#722f37]">{fullName}</span>, votre table a été réservée.
        </p>
        <div className="mt-6 space-y-2 text-[#b4975a] ">
          <p><span className="font-medium">Date :</span> {date}</p>
          <p><span className="font-medium">Heure :</span> {time}</p>
          <p><span className="font-medium">Nombre de convives :</span> {guests}</p>
          <p><span className="font-medium">Occasion :</span> {occasion}</p>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-6 py-2 bg-[#722f37] text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Confirmation;