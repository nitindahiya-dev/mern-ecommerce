import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Search from "./Search";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  

  return (
    <div className="p-5 bg-white">
      <div className="max-w-[1450px] mx-auto flex items-center justify-between">
        <div className="logo">
          <Link to={"/"} className="text-[30px] md:text-[35px] font-semibold">
            <span className="text-amber-300 font-bold">Mern</span>Ecom
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        <div
          className={`navbar uppercase flex flex-col md:flex-row gap-4 md:gap-7 font-semibold font-primaryFont text-xs md:text-sm absolute md:static bg-white md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "top-20 right-0 p-5 shadow-lg" : "top-[-300px] right-0"
          }`}
        >
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={"/about-us"} onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to={"/contact-us"} onClick={() => setMenuOpen(false)}>Contact us</Link>
          <span className="font-semibold font-primaryFont text-xs md:text-sm">
            Need help? <a href="tel:+00 00000000">+00 00000000</a>
          </span>
          <Link to={"/sign-in"} onClick={() => setMenuOpen(false)}>
            <IoPersonOutline className="text-lg md:text-xl" />
          </Link>
          <FaRegHeart className="text-lg md:text-xl" />
          <MdOutlineShoppingBag className="text-lg md:text-xl" />
        </div>
      </div>
      <Search />
    </div>
  );
}
