import siteLogo from "../assets/amazon.jpg";
import niger from "../assets/niger.jpg";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-screen">
      <nav className="w-full bg-[#131921] flex items-center justify-center gap-20 p-2">
        <figure className="w-20 h-auto rounded-full">
          <Link to="/">
            <img
              src={siteLogo}
              alt="logo"
              className="w-full object-cover p-1 border-none outline-none rounded-md shadow-xl"
            />
          </Link>
        </figure>
        <div className="flex text-white relative">
          <div className="absolute -left-4 bottom-1">
            <CiLocationOn />
          </div>
          <div>
            <p className="te text-gray-400">Delivered to</p>
            <p className="font-semibold">Nigeria</p>
          </div>
        </div>
        <div className="flex overflow-hidden rounded-md gap-0">
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="w-80 px-2"
          />
          <span className="bg-[#F3A847] p-1 cursor-pointer">
            <AiOutlineSearch color="#000" size={20} />
          </span>
        </div>
        <div className="flex gap-1 relative cursor-pointer">
          <figure>
            <img src={niger} alt="flag" className="w-8 h-auto object-cover" />
          </figure>
          <span className="text-white font-semibold">EN</span>
          <span className="absolute left-14 -bottom-0">
            <HiChevronDown color="gray" />
          </span>
        </div>
        <div className="cursor-pointer">
          <Link to="/login">
            <BsFillPersonFill color="#fff" size={25} />
            <p className="text-white font-semibold">Sign in</p>
          </Link>
        </div>
        <div className="text-white cursor-pointer">
          <p>Returns</p>
          <p className="font-semibold">& Orders</p>
        </div>
        <div className="text-white cursor-pointer relative">
          <Link to="/cart">
            <BsCart3 color="#fff" size={25} />
          </Link>
          <span className="bg-[#F3A847] rounded-full p-1 text-xs absolute bottom-4 left-3 text-black font-bold">
            0
          </span>
        </div>
      </nav>
      <div className="w-full bg-[#232F3E] flex gap-4 text-white p-2 px-10">
        <p>Todays Deals</p>
        <p>Customers Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </header>
  );
};

export default Navbar;
