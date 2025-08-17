import menu11 from "../assets/menu11.png";
import menu22 from "../assets/menu12.png";
import menu33 from "../assets/menu33.png";
import menu44 from "../assets/menu44.png";
import menu55 from "../assets/menu55.png";
const MenuQr = () => {
  return (
    <div className=" py-36 bg-white md:mx-auto md:max-w-7xl  w-full h-full  ">
      <div className="flex flex-col ">
        <img src={menu11}  loading="lazy" className="object-cover" alt="" />
        <img src={menu22}  loading="lazy" className="object-cover" alt="" />
        <img src={menu33}  loading="lazy" className="object-cover" alt="" />
        <img src={menu44}  loading="lazy" className="object-cover" alt="" />
        <img src={menu55}  loading="lazy" className="object-cover" alt="" />
      </div>
    </div>
  );
};

export default MenuQr;
