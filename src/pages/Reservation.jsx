import { useEffect, useState } from "react";
import { User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import video from "../assets/video1.mp4";
import menu from "../assets/heroreservation.jpg";

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

    navigate("/confirmation", {
      state: {
        fullName,
        date: date.toLocaleDateString(),
        time,
        guests,
        occasion: occasion === "Autre" ? customOccasion : occasion,
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
    <div className="min-h-screen transition-colors duration-300">
      <div
        className="h-[40vh] sm:h-[50vh] relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${menu})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 shadow-2xl bg-black/50" />
        <h1 className="text-3xl uppercase sm:text-5xl md:text-7xl text-white font-serif relative z-10">
          Reservez une table
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-16  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-[#f5f5f0] rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                      placeholder="Nom Complet"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                      placeholder="+212 5 22 39 71 61"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date.toISOString().split("T")[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de Convives
                  </label>
                  <div className="flex items-center space-x-4 border border-gray-200 rounded-lg p-2">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium w-8 text-center">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Time Slots */}
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
                      className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        time === slot
                          ? "bg-[#722f37] text-white"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasions */}
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
                      className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                        occasion === occ
                          ? "bg-[#722f37] text-white"
                          : "bg-gray-50 hover:bg-gray-100"
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
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                      placeholder="Précisez votre occasion"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#722f37] text-[#b4975a] rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  Confirmer la Réservation
                </button>
              </div>
            </form>
          </div>

          {/* Video Section */}
          <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
