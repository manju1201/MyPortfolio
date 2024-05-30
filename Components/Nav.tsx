import React from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";


interface Props{
    openNav: () => void;
}
const Nav = ({openNav}: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          <a href="/">Manjju
          <span className="text-yellow-300"> Shree</span></a>
          
        </h1>
        <div className="nav-link"><a href="/">HOME</a></div>
        <div className="nav-link"><a href="#hero">ABOUT</a></div>
        <div className="nav-link"><a href="#experience">EXPERIENCE</a></div>
        <div className="nav-link"><a href="#projects">PROJECTS</a></div>
        <div className="nav-link"><a href="#publications">PUBLICATIONS</a></div>
        <div className="nav-link"><a href="#footer">CONTACT</a></div>

        <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
