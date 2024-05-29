// import {
//   DevicePhoneMobileIcon,
//   EnvelopeIcon,
//   MapIcon,
// } from "@heroicons/react/20/solid";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
//       <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
//       <div className="flex items-start space-x-6">
//   <div className="flex flex-col items-center space-y-4">
//     <div className="flex items-center space-x-2">
//       <div className="md:w-[1.5rem] md:h-[1.5rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
//         <FontAwesomeIcon icon={faGithub} className="text-black" />
//       </div>
//       <p className="text-[10px] text-white opacity-60">
//         <a href="https://github.com/manju1201" target="_blank" rel="noopener noreferrer">
//           GitHub
//         </a>
//       </p>
//     </div>
//     <div className="flex items-center space-x-2">
//       <div className="md:w-[1.5rem] md:h-[1.5rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
//         <FontAwesomeIcon icon={faLinkedin} className="text-black" />
//       </div>
//       <p className="text-[10px] text-white opacity-60">
//         <a href="https://www.linkedin.com/in/manju-shree/" target="_blank" rel="noopener noreferrer">
//           LinkedIn
//         </a>
//       </p>
//     </div>
//   </div>
// </div>



//         <div className="flex items-center space-x-6">
//           <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
//             <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
//           </div>
//           <div>
//             <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
//               Phone
//             </h1>
//             <p className="text-[17px] w-[90%] text-white opacity-60">
//               +16024590415
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-6">
//           <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
//             <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
//           </div>
//           <div>
//             <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
//               Email Me
//             </h1>
//             <p className="text-[17px] w-[90%] text-white opacity-60">
//               mgendeti@asu.edu 
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-[80%] mt-[2rem] mx-auto flex items-center justify-between">
// <div className="text-[16px] text-[#55e6a5] opacity-90">
//     © 2024 Manjju Shree | All rights reserved. 
//   </div>
//   <div className="flex items-center space-x-10">
//     <p className="text-[16px] text-[#55e6a5] opacity-90 text-right">Thank you for visiting my Portfolio</p>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Footer;





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
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="flex justify-around border-b-[1px] pb-[6rem] border-gray-400 w-[80%] mx-auto gap-[3rem]">
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
      <div className="w-[80%] mt-[2rem] mx-auto flex items-center justify-between">
        <div className="text-[16px] text-[#55e6a5] opacity-90">
          © 2024 Manjju Shree | All rights reserved. 
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-[#55e6a5] opacity-90 text-right">Thank you for visiting my Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
