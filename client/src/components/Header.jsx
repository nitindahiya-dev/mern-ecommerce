import { Link } from "react-router-dom"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Search from "./Search";



export default function Header() {
  return (
    <div className="p-5">
      <div className=" max-w-[1450px] mx-auto flex items-center justify-between">
        <div className="logo">
          <Link to={"/"} className="text-[35px] font-semibold"> <span className="text-amber-300 font-bold text-[30px]">Mern</span>Ecom</Link>
        </div>
        <div className="navbar uppercase flex gap-7 font-semibold font-primaryFont text-sm">
          <Link to={"/"}>Home</Link>
          <Link to={"/about-us"}>About us</Link>
          <Link to={"/contact-us"}>Contact us</Link>
        </div>
        <div className="left-navbar flex gap-7 uppercase font">
          <span className="font-semibold font-primaryFont">
            Need help? <a href="tel:+00 00000000" >+00 00000000</a>
          </span>
          <Link to={"/sign-in"}>
          <IoPersonOutline />
          </Link>
          <FaRegHeart />
          <MdOutlineShoppingBag />

        </div>
      </div>
        <Search />









    </div>
  )
}
