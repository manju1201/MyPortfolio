import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, BookOpenIcon, ClipboardDocumentCheckIcon, DocumentTextIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className='h-[88vh] bg-[url("/images/banner.jpg")] mt-[5vh] bg-cover bg-center relative'>
      <Particle />
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h1 className="text-[28px] md:text-[40px] lg:text-[50px] text-white font-bold">
            HI, I AM <span className="text-yellow-400">MANJJU SHREE!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[16px] md:text-[18px] text-[#ffffff92]">
            Hello, I am a recent MSCS graduate from ASU, actively looking 
            for full-time roles. With experience in software applications 
            and ML models, I thrive on programming and problem-solving. 
            I am eager to explore new opportunities.
          </p>
          <div className="mt-[2rem] flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-6">
            <a className="px-[2rem] hover:bg-yellow-300 transition-all duration-200 py-[1rem] text-[16px] md:text-[18px] 
            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 cursor-pointer" href="/resume/SDE.pdf" target="_blank">
              <p>Check Out My Resume</p>
              <ClipboardDocumentCheckIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
            </a>
            {/* <button className="flex items-center space-x-2">
                <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 
                text-[#55e6a5]"/>
                <p className="text-[20px] font-semibold text-white">Watch The Video</p>
            </button> */}
          </div>
        </div>
        <div className="w-full max-w-[500px] hidden lg:flex items-center justify-center">
          <div className="w-[80%] relative pt-[80%] rounded-full overflow-hidden">
            <Image src="/images/grad_picture.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
