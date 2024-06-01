import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Experiences</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-stretch gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div
            className="bg-[#09101a] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem] flex flex-col justify-between h-full"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
            }}
          >
            <div className="flex-grow">
              <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]">
                Software Engineer, DS
              </h1>
              <p className="text-[16px] text-[#55e6a5] mb-[1.5rem]">
                AI Institute @ USC
                <br />
                Jan 2022 – July 2022
                <br /> Columbia, SC, USA
              </p>
              <div className="text-[14px] text-[#d3d2d2] font-sans text-left space-y-2">
                <p>
                  Developed a six-stage architecture for Joint Embedding in
                  Memotion Analysis, surpassing SOTA in classification tasks, and
                  built a responsive MERN app, enhancing user interaction and
                  backend efficiency.
                </p>
                <h3 className="font-semibold text-[#55e6a5]">Skills Used:</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="list-disc list-outside space-y-1">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                  </ul>
                  <ul className="list-disc list-outside space-y-1">
                    <li>Machine Learning</li>
                    <li>NLP</li>
                    <li>Data Processing</li>
                    <li>Benchmarking</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div
            className="bg-[#09101a] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem] flex flex-col justify-between h-full"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
            }}
          >
            <div className="flex-grow">
              <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]">
                ML Engineer
              </h1>
              <p className="text-[16px] text-[#55e6a5] mb-[1.5rem] ">
                Wipro Research
                <br />
                May 2021 – Dec 2021
                <br />
                Bangalore, India
              </p>
              <div className="text-[14px] text-[#d3d2d2] font-sans text-left space-y-2">
                <p>
                  Built a Fake News Detection system surpassing SOTA by 14.9%,
                  designed user-friendly React.js interface, engineered a scalable
                  Node.js backend, and implemented a CI/CD pipeline on Heroku.
                </p>
                <h3 className="font-semibold text-[#55e6a5]">Skills Used:</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="list-disc list-outside space-y-1">
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>API Design</li>
                  </ul>
                  <ul className="list-disc list-outside space-y-1">
                    <li>CI/CD</li>
                    <li>Heroku</li>
                    <li>Scalability</li>
                    <li>Team Collaboration</li>
                    <li>Social Media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div
            className="bg-[#09101a] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem] flex flex-col justify-between h-full"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
            }}
          >
            <div className="flex-grow">
              <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]">
                Software Developer
              </h1>
              <p className="text-[16px] text-[#55e6a5] mb-[1.5rem]">
                Iha Pragyan
                <br />
                Feb 2021 – May 2021
                <br /> Hyderabad, India
              </p>
              <div className="text-[14px] text-[#d3d2d2] font-sans text-left space-y-2">
                <p>
                  Enhanced task management by 20%, integrated Stripe checkout,
                  developed a REST API boosting integrations by 30%, and added
                  Whiteboard and audio rooms, increasing user engagement by 25%.
                </p>
                <h3 className="font-semibold text-[#55e6a5]">Skills Used:</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="list-disc list-outside space-y-1">
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Django</li>
                  </ul>
                  <ul className="list-disc list-outside space-y-1">
                    <li>Django REST</li>
                    <li>Stripe Integration</li>
                    <li>User Engagement </li>
                    <li>Third-party Integrations</li>
                    <li>WebSockets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
