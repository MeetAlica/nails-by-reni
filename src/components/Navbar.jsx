import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="bg-red-300 opacity-70 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">Nails by Reni</h1>
      <ul className="hidden md:flex">
        <li className="p-5 rounded-full hover:bg-red-400 transition duration-500 hover:text-white">
          <a href="#about">Rólam</a>
        </li>
        <li className="p-5 rounded-full hover:bg-red-400 transition duration-500 hover:text-white">
          <a href="#work">Munkáim</a>
        </li>
        <li className="p-5 rounded-full hover:bg-red-400 transition duration-500 hover:text-white">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "text-white z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%] h-full ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl primary-color md-4 p-5">Menu</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about" onClick={closeNav}>
              Rólam
            </a>
          </li>
          <li className="p-2">
            <a href="#work" onClick={closeNav}>
              Munkáim
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={closeNav}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
