import { useEffect, useState } from "react";
import { User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import menu from "../assets/logo.jpg";
import restaurantImage from "../assets/logo.jpg"; // Import the image you want to display

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [customOccasion, setCustomOccasion] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const timeSlots = [
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];

  const occasions = [
    "Anniversaire",
    "Célébration",
    "Réunion d'affaires",
    "Rendez-vous",
    "Autre",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !fullName || !phoneNumber) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const formattedDate = date.toLocaleDateString();
    const formattedOccasion = occasion === "Autre" ? customOccasion : occasion;

    const message = `Nouvelle réservation :\n\nNom: ${fullName}\nTéléphone: ${phoneNumber}\nDate: ${formattedDate}\nHeure: ${time}\nNombre de convives: ${guests}\nOccasion: ${formattedOccasion}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+212603919335?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    navigate("/confirmation", {
      state: {
        fullName,
        date: formattedDate,
        time,
        guests,
        occasion: formattedOccasion,
      },
    });
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
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
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50">
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
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-bold text-center relative z-10 animate-fade-in">
          Réservez une table
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Détails de la réservation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom Complet
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006638] focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                      placeholder="Nom Complet"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006638] focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                      placeholder="+212 5 22 39 71 61"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date.toISOString().split("T")[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006638] focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de Convives
                  </label>
                  <div className="flex items-center space-x-4 border border-gray-200 rounded-xl p-2 bg-gray-50">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-gray-100 transition-colors text-gray-900"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-900 w-8 text-center">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-gray-100 transition-colors text-gray-900"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heure
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                        time === slot
                          ? "bg-[#006638] text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occasion Spéciale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {occasions.map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setOccasion(occ)}
                      className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                        occasion === occ
                          ? "bg-[#006638] text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
                {occasion === "Autre" && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={customOccasion}
                      onChange={(e) => setCustomOccasion(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006638] focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                      placeholder="Précisez votre occasion"
                      required
                    />
                  </div>
                )}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-[#006638] text-white rounded-xl hover:bg-[#004225] transition-all duration-200 font-semibold shadow-lg hover:shadow-[#006638]/30"
                >
                  Confirmer la Réservation
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative mb-2 h-[400px] lg:h-[800px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={restaurantImage}
              alt="Restaurant"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
