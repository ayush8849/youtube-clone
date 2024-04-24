import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FiSun } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const closeMenuHandler = () => {
    dispatch(closeMenu());
  };
  const [toggle,setToggle] = useState(false);
  const toggle1 = ()=>{
    setToggle(!toggle);
  }



  return (
    <>
      <div className="grid grid-flow-col p-3 mt-1 shadow-lg">
        <div className="flex col-span-1">
          <button onClick={isMenuOpen ? closeMenuHandler : toggleMenuHandler} className="cursor-pointer">
            {isMenuOpen ? <ImCross size={48}/> : <GiHamburgerMenu size={48} />}
          </button>

          <img
            className="h-8 mx-4 mt-2"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
            alt="Logo"
          />
        </div>

        <div className="flex justify-center col-span-10">
          <input
            className="w-1/2 border border-gray-500 rounded-l-full p-4 pt-3"
            type="text"
            placeholder="Search Videos"
          />
          <button className="border border-gray-500 rounded-r-full p-4 pb-5">
            <FaSearch />
          </button>
        </div>

        <button onClick={toggle1}>
          {toggle ? <FiSun size={30} /> : <IoSunny size={30} />}
        </button>
        <div className="col-span-1">
          <FaRegUser size={35} />
        </div>
      </div>
    </>
  );
};

export default Head;


