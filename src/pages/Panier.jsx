import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, PlusCircle, MinusCircle, ShoppingCart, MapPin } from 'lucide-react';
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

const Panier = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const [isInSidimaarouf, setIsInSidimaarouf] = useState(true);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = isInSidimaarouf ? 0 : 20;
    return (subtotal + deliveryFee).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-24 p-4 min-h-screen bg-white">
      <Helmet>
        <title>
          {cart.length > 0
            ? `Panier (${cart.length} articles) - Restaurant la brioche`
            : "Panier - Restaurant la brioche"}
        </title>
        <meta
          name="description"
          content="Consultez et gérez votre panier avant de passer commande chez Restaurant la brioche. Profitez de notre cuisine authentique !"
        />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-[#006638] mb-8 text-center"
      >
        Votre Panier
      </motion.h1>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="lg:col-span-1">
            <CartSummary
              subtotal={calculateSubtotal()}
              total={calculateTotal()}
              isInSidimaarouf={isInSidimaarouf}
              setIsInSidimaarouf={setIsInSidimaarouf}
            />
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
    className="text-center py-12"
  >
    <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
    <p className="text-xl text-gray-600 mb-8">Votre panier est vide.</p>
    <Link
      to="/menu"
      className="px-6 py-3 bg-[#006638] text-white rounded-full hover:bg-[#004225] transition-colors duration-300 inline-block"
    >
      Parcourir le menu
    </Link>
  </motion.div>
);

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-50 rounded-lg shadow-md p-4 mb-4 flex flex-col sm:flex-row items-center justify-between"
  >
    <div className="flex items-center mb-4 sm:mb-0">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-[#006638] font-medium">{item.price} Dh</p>
      </div>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => decreaseQuantity(item.id)}
        className="text-[#006638] hover:text-[#004225] transition-colors duration-200"
      >
        <MinusCircle className="w-6 h-6" />
      </button>
      <span className="mx-3 text-gray-700 font-semibold">{item.quantity}</span>
      <button
        onClick={() => increaseQuantity(item.id)}
        className="text-[#006638] hover:text-[#004225] transition-colors duration-200"
      >
        <PlusCircle className="w-6 h-6" />
      </button>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-6 text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

const CartSummary = ({ subtotal, total, isInSidimaarouf, setIsInSidimaarouf }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gray-50 rounded-lg shadow-md p-6"
  >
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Résumé</h2>
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-600">Sous-total</span>
      <span className="font-medium">{subtotal.toFixed(2)} Dh</span>
    </div>
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-600">Frais de livraison</span>
      <span className="font-medium">{isInSidimaarouf ? "Gratuit" : "20 Dh"}</span>
    </div>
    <div className="border-t border-gray-200 my-4"></div>
    <div className="flex justify-between items-center mb-6">
      <span className="text-lg font-semibold text-gray-800">Total</span>
      <span className="text-lg font-bold text-[#006638]">{total} Dh</span>
    </div>
    <div className="mb-6">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isInSidimaarouf}
          onChange={() => setIsInSidimaarouf(!isInSidimaarouf)}
          className="form-checkbox h-5 w-5 text-[#006638]"
        />
        <span className="ml-2 text-gray-700">Livraison à Sidimaarouf</span>
      </label>
      <p className="text-sm text-gray-500 mt-2">
        <MapPin className="inline-block w-4 h-4 mr-1" />
        {isInSidimaarouf
          ? "Livraison gratuite à Sidimaarouf"
          : "Frais de livraison de 20 Dh hors Sidimaarouf"}
      </p>
    </div>
    <Link to="/checkout" className="block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-[#006638] text-white rounded-full hover:bg-[#004225] transition-colors duration-300 font-semibold text-lg"
      >
        Passer à la caisse
      </motion.button>
    </Link>
  </motion.div>
);

export default Panier;
