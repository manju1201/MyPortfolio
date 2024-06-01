import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full top-0 z-[10000] transition-colors duration-300 ${scrolled ? 'bg-[#141c27]/80 backdrop-blur-md' : 'bg-[#141c27]'}`}>
      <div className="flex items-center justify-between w-[80%] mx-auto h-[12vh]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          <a href="/">M<span className="text-yellow-300">S</span></a>
        </h1>
        <div className="hidden md:flex space-x-6">
          <div className="nav-link"><a href="/">HOME</a></div>
          <div className="nav-link"><a href="#hero">ABOUT</a></div>
          <div className="nav-link"><a href="#experience">EXPERIENCE</a></div>
          <div className="nav-link"><a href="#projects">PROJECTS</a></div>
          <div className="nav-link"><a href="#publications">PUBLICATIONS</a></div>
          <div className="nav-link"><a href="#footer">CONTACT</a></div>
        </div>
        <div onClick={openNav} className="md:hidden">
          <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
