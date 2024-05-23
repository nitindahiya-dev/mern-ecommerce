import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TextInput } from "flowbite-react";


export default function Search() {
    return (
        <div className="max-w-[1450px] mx-auto text-black flex items-center">
            <div className="bg-amber-300 relative cursor-pointer group w-[250px] flex items-center justify-between p-3 font-semibold rounded-lg">
                <HiMenuAlt1 />
                <span >BROWSE CATEGORIES</span>
                <IoIosArrowDown />
                <div className="hidden  absolute top-[45px]  left-0 rounded-md right-0 bg-white group-hover:flex flex-col items-left gap-5 p-10 ">
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                </div>
            </div>
            <div className="w-[1200px] ml-5">
                <form>
                    <TextInput type="text" placeholder="search product..." rightIcon={CiSearch} />
                </form>
            </div>
        </div>
    )
}
