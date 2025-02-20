import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Equipe from "./pages/Equipe";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import Confirmation from "./components/Confirmation";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/notre-equipe" element={<Equipe />} />
        <Route path="/contactez-nous" element={<Contact />} />
        <Route path="/réservez" element={<Reservation />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
