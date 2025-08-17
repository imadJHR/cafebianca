import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaTrash } from "react-icons/fa";
import axios from "axios";

const AdminPage = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    imageFile: null,
    description: "",
    endsAt: "",
  });
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get("https://apibrioche-1.onrender.com/api/offers");
      setOffers(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des offres:", error);
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("originalPrice", formData.originalPrice);
      formDataToSend.append("image", formData.imageFile);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("endsAt", formData.endsAt);

      await axios.post("https://apibrioche-1.onrender.com/api/offers", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Offre ajoutée avec succès !");
      setFormData({
        name: "",
        price: "",
        originalPrice: "",
        imageFile: null,
        description: "",
        endsAt: "",
      });
      fetchOffers();
    } catch (error) {
      console.error("Erreur lors de l’ajout de l’offre:", error);
      alert("Échec de l’ajout de l’offre");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (offerId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) return;
    try {
      await axios.delete(`https://apibrioche-1.onrender.com/api/offers/${offerId}`);
      alert("Offre supprimée avec succès !");
      fetchOffers();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      alert("Échec de la suppression de l’offre");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
          <button
            onClick={handleLogoutClick}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            <FaSignOutAlt /> Déconnexion
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input className="w-full border rounded-lg p-3" type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
          <input className="w-full border rounded-lg p-3" type="number" name="price" placeholder="Prix" value={formData.price} onChange={handleChange} required />
          <input className="w-full border rounded-lg p-3" type="number" name="originalPrice" placeholder="Prix original" value={formData.originalPrice} onChange={handleChange} required />
          <input className="w-full border rounded-lg p-3" type="file" name="imageFile" onChange={handleFileChange} required />
          <textarea className="w-full border rounded-lg p-3" rows="4" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
          <input className="w-full border rounded-lg p-3" type="datetime-local" name="endsAt" value={formData.endsAt} onChange={handleChange} required />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg" type="submit" disabled={loading}>
            {loading ? "Ajout en cours..." : "Ajouter une offre"}
          </button>
        </form>

        <div>
          <h2 className="text-xl font-semibold mb-4">Liste des offres</h2>
          {offers.length === 0 ? (
            <p className="text-gray-500">Aucune offre disponible.</p>
          ) : (
            <ul className="space-y-4">
              {offers.map((offer) => (
                <li key={offer._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <img src={`https://apibrioche-1.onrender.com${offer.image}`} alt={offer.name} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <p className="font-semibold">{offer.name}</p>
                      <p className="text-gray-600">{offer.price} Dh (Ancien prix: {offer.originalPrice} Dh)</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(offer._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md">
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
