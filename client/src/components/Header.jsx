import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { Dropdown, DropdownItem } from "flowbite-react";


export default function Header() {
  return (
    <Navbar className="bg-sky-950 ">
      <div className=" pb-2 w-full flex items-center justify-between">
        <div className="flex justify-between w-full ">

          <Link className="text-white text-xs font-semibold" to={"/shipping"}>Shipping</Link>
          <Link className="text-white text-xs font-semibold" to={"/faq"}>FAQ</Link>
          <Link className="text-white text-xs font-semibold" to={"/contact"}>Contact</Link>
          <Link className="text-white text-xs font-semibold" to={"/tracking-order"}>Tracking Order</Link>
        </div>
        <div className=" hidden md:flex gap-5 items-center">
          <Link className="text-white"><FaFacebookF /></Link>
          <Link className="text-white"><FaXTwitter /></Link>
          <Link className="text-white"><FaInstagram /></Link>
          <Link className="text-white"><FaPinterest /></Link>

          <div className="flex gap-5 text-white text-sm items-center">
            <Dropdown className="" label="English" inline>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>

            <Dropdown className="" label="$ USD" inline>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown> 
          </div>
        </div>
      </div>
    </Navbar>
  )
}
