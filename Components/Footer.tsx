import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from "@heroicons/react/20/solid";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import React from "react";

const Footer = () => {
  return (
    <div className="pt-[4rem] pb-[2rem] bg-[#02050a]">
      <div className="flex flex-col md:flex-row justify-around border-b-[1px] pb-[3rem] border-gray-400 w-[90%] mx-auto gap-[2rem]">
        <div className="flex items-center space-x-4">
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <FontAwesomeIcon icon={faGithub} className="text-black w-[1.5rem] h-[1.5rem]" />
          </div>
          <p className="text-[17px] text-white opacity-60">
            <a href="https://github.com/manju1201" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <FontAwesomeIcon icon={faLinkedin} className="text-black w-[1.5rem] h-[1.5rem]" />
          </div>
          <p className="text-[17px] text-white opacity-60">
            <a href="https://www.linkedin.com/in/manju-shree/" target="_blank" rel="noopener noreferrer">
              LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="w-[1.5rem] h-[1.5rem] text-black" />
          </div>
          <div>
            <p className="text-[17px] text-white opacity-60">
              +1 (602) 459-0415
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="w-[1.5rem] h-[1.5rem] text-black" />
          </div>
          <div>
            <p className="text-[17px] text-white opacity-60">
              <a href="mailto:mgendeti@asu.edu">mgendeti@asu.edu</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-[2rem] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="text-[16px] text-[#55e6a5] opacity-90 mb-4 md:mb-0">
          © 2024 Manjju Shree | All rights reserved. 
        </div>
        <div className="flex items-center justify-center space-x-4 md:space-x-10">
          <p className="text-[16px] text-[#55e6a5] opacity-90">Thank you for visiting my Portfolio!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
