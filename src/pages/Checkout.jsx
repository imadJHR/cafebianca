"use client";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = ({ cart, clearCart }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateDeliveryFee = () => {
    const subtotal = Number.parseFloat(calculateSubtotal());
    if (deliveryInfo.address.toLowerCase().includes("sidimaarouf")) return 0;
    return subtotal < 250 ? 20 : 0;
  };

  const calculateTotal = () => {
    return (
      Number.parseFloat(calculateSubtotal()) + calculateDeliveryFee()
    ).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} (Quantity: ${item.quantity}) - ${item.price.toFixed(
            2
          )} Dh`
      )
      .join("\n");

    const message = `
Ma commande Brioche :

${orderDetails}

Sous-total: ${calculateSubtotal()} Dh
Frais de livraison: ${calculateDeliveryFee()} Dh
Total: ${calculateTotal()} Dh

Informations de livraison:
Nom: ${deliveryInfo.name}
Téléphone: ${deliveryInfo.phone}
Adresse: ${deliveryInfo.address}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+212661528619?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOrderPlaced(true);
    clearCart();
  };

  if (isOrderPlaced) {
    return <OrderConfirmation />;
  }

  return (
    <div className="container mx-auto mt-24 p-4 max-w-4xl">
      <Helmet>
        <title>
          {cart.length > 0
            ? `Checkout (${cart.length} articles) - Restaurant la brioche`
            : "Checkout - Restaurant la brioche"}
        </title>
        <meta
          name="description"
          content="Finalisez votre commande chez Restaurant la brioche et passez votre commande via WhatsApp en quelques clics !"
        />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-[#006638] mb-8 text-center"
      >
        Finaliser votre commande
      </motion.h1>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Votre commande
              </h2>
              <CartItems cart={cart} />
            </div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Détails de livraison
              </h2>
              <DeliveryForm
                deliveryInfo={deliveryInfo}
                handleInputChange={handleInputChange}
              />
              <OrderSummary
                subtotal={calculateSubtotal()}
                deliveryFee={calculateDeliveryFee()}
                total={calculateTotal()}
              />
              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full px-6 py-3 bg-[#006638] text-white rounded-lg text-lg font-semibold hover:bg-[#005530] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006638]"
              >
                Commander via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EmptyCart = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-16 bg-gray-100 rounded-lg"
  >
    <ShoppingBag className="mx-auto h-16 w-16 text-[#006638] mb-4" />
    <p className="text-xl text-gray-600 mb-8">
      Votre panier est vide. Ajoutez des articles avant de passer à la caisse.
    </p>
    <Link
      to="/menu"
      className="px-6 py-3 bg-[#006638] text-white rounded-full hover:bg-[#004225] transition-all duration-300 inline-block transform hover:scale-105"
    >
      Retour au menu
    </Link>
  </motion.div>
);

const CartItems = ({ cart }) => (
  <ul className="divide-y divide-gray-200">
    <AnimatePresence>
      {cart.map((item) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="py-4 flex items-center space-x-4"
        >
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600">Quantité: {item.quantity}</p>
          </div>
          <p className="text-lg font-semibold text-[#006638]">
            {(item.price * item.quantity).toFixed(2)} Dh
          </p>
        </motion.li>
      ))}
    </AnimatePresence>
  </ul>
);

const DeliveryForm = ({ deliveryInfo, handleInputChange }) => (
  <form className="space-y-4">
    <InputField
      id="name"
      label="Nom"
      type="text"
      value={deliveryInfo.name}
      onChange={handleInputChange}
      placeholder="Votre nom"
    />
    <InputField
      id="phone"
      label="Téléphone"
      type="tel"
      value={deliveryInfo.phone}
      onChange={handleInputChange}
      placeholder="Votre numéro de téléphone"
    />
    <InputField
      id="address"
      label="Adresse de livraison"
      type="textarea"
      value={deliveryInfo.address}
      onChange={handleInputChange}
      placeholder="Votre adresse de livraison"
    />
  </form>
);

const InputField = ({ id, label, type, value, onChange, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#006638] focus:border-[#006638] transition-colors duration-200"
        rows="3"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#006638] focus:border-[#006638] transition-colors duration-200"
      />
    )}
  </div>
);

const OrderSummary = ({ subtotal, deliveryFee, total }) => (
  <div className="mt-6 border-t border-gray-200 pt-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600">Sous-total:</span>
      <span className="font-semibold">{subtotal} Dh</span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600">Frais de livraison:</span>
      <span className="font-semibold">
        {deliveryFee === 0 ? "Gratuit" : `${deliveryFee.toFixed(2)} Dh`}
      </span>
    </div>
    <div className="flex justify-between items-center text-lg font-bold text-[#006638]">
      <span>Total:</span>
      <span>{total} Dh</span>
    </div>
  </div>
);

const OrderConfirmation = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center mt-36 py-16"
  >
    <div className="bg-green-100 rounded-full  p-4 mx-auto w-24 h-24 flex items-center justify-center mb-6">
      <Check className="w-12 h-12 text-green-600" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Commande envoyée avec succès!
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      Merci pour votre commande. Nous vous contacterons bientôt via WhatsApp
      pour confirmer les détails.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-[#006638] text-white rounded-full hover:bg-[#004225] transition-all duration-300 inline-block transform hover:scale-105"
    >
      Retour à l'accueil
    </Link>
  </motion.div>
);

export default Checkout;
