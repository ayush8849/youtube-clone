import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";


import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
const toggleMenuHandler = ()=>{
  dispatch(toggleMenu());
};

  return (
    <>
      <div className="grid grid-flow-col p-3 mt-1 shadow-lg">
        <div className="flex col-span-1">
          <button onClick={()=>toggleMenuHandler()} className="cursor-pointer">
            <GiHamburgerMenu size={48}/>
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

        <div className="col-span-1">
          <FaRegUser size={35} />
        </div>
      </div>
      
    </>
  );
};

export default Head;
