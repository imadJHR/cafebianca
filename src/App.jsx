import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Equipe from "./pages/Equipe";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import Confirmation from "./components/Confirmation";
import { useEffect, useState } from "react";
import Panier from "./pages/Panier";
import Checkout from "./pages/Checkout";
import MenuOfDay from "./pages/MenuOfDay";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import MenuQr from "./pages/MenuQr";

const App = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));

    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
    const storedAdmin = localStorage.getItem("isAdmin");
    if (storedAdmin === "true") {
      setIsAdmin(true);
    }
  }, [cart, isLoggedIn, isAdmin]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setIsAdmin(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "true");
      return true;
    } else if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setIsAdmin(false);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "false");
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
  };

  const hideNavbarFooter = location.pathname === "/admin";

  return (
    <div className="">
      {!hideNavbarFooter && <Navbar cartCount={cartCount} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commander" element={<Menu addToCart={addToCart} />} />
        <Route path="/notre-equipe" element={<Equipe />} />
        <Route path="/contactez-nous" element={<Contact />} />
        <Route path="/menu" element={<MenuQr />} />
        <Route path="/réservez" element={<Reservation />} />
        <Route
          path="/panier"
          element={
            <Panier
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route
          path="/plat-du-jour"
          element={<MenuOfDay addToCart={addToCart} />}
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <Admin handleLogout={handleLogout} isAdmin={isAdmin} />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
