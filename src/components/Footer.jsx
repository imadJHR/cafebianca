import { Link } from "react-router-dom";
    import Marquee from "react-fast-marquee";
    import logo from "../../public/logo.jpg";
    import visa from "../assets/visa.png";
    import master from "../assets/master.png";
    import amex from "../assets/amex.png";

    function Footer() {
      return (
        <footer className="bg-[#722f37] text-white mt-12">
          <Marquee className="text-[#722f37]  bg-[#b4975a] py-2">
            <span>Enjoy our Happy Hour from 5 PM to 11 PM!</span>
            <span className="mx-4">|</span>
            <span>New dishes added to the menu!</span>
            <span className="mx-4">|</span>
            <span>Live music every Friday night!</span>
          </Marquee>
          <div className="container mx-auto py-8">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="Restaurant Logo"
                className="h-12 rounded-full mb-4"
              />
              <p className="mb-4 text-sm">
                &copy; {new Date().getFullYear()} Restaurant Bar. All rights
                reserved.
              </p>
              <nav className="mb-4">
                <ul className="flex justify-center space-x-6">
                  <li>
                    <Link
                      to="/"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      Acceuil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/menu"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactez-nous"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/réservez"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      Reservations
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mt-4">
                <h6 className="text-sm font-semibold mb-2">Payment Methods</h6>
                <div className="flex justify-center space-x-4">
                  <img src={visa} alt="Visa" className="h-6 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src="https://www.cmi.co.ma/sites/default/files/logo_cmi_va.png"
                    alt="cmi"
                    className="h-6 opacity-75 hover:opacity-100 transition-opacity duration-300"
                  />
                  <img src={master} alt="master card" className="h-6 w-10 opacity-75 hover:opacity-100 transition-opacity object-cover duration-300" />
                  <img src={amex} alt="american express" className="h-6 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;
