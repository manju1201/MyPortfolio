import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
      <p className='heading'>    
        My <span className='text-yellow-400'>Experiences</span>   
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        
        <div data-aos="fade-right">
          <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]'>Software Engineer, DS</h1>
            <p className='text-[16px] text-[#d3d2d2] mb-[1.5rem]'>AI Institute, University of South Carolina<br/>Jan 2022 – July 2022<br/> Columbia, SC, USA</p>
            <ul className='text-[14px] text-[#d3d2d2] font-sans list-disc list-outside text-left space-y-2'>
              <li>Built a benchmark for Joint Embedding with a six-stage architecture in Memotion Analysis on Twitter Memes.</li>
              <li>Surpassed SOTA in Memotion Classification tasks: Sentiment: +16%, Humor: +4.6%, Scales of semantic: +14.6%</li>
              <li>Built a MERN app, leveraging React to enhance user interaction with a 15% improvement in interface responsiveness.</li>
              <li>Implemented backend using Node.js & MongoDB, improving data processing efficiency and functionality by 25%.</li>
            </ul>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 font-semibold text-center p-[2rem]'>
            <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]'>ML Engineer</h1>
            <p className='text-[16px] text-[#d3d2d2] mb-[1.5rem]'>Wipro Research<br/>May 2021 – Dec 2021<br/>Bangalore, India</p>
            <ul className='text-[14px] text-[#d3d2d2] font-sans list-disc list-outside text-left space-y-2'>
              <li>Collaborated with a group of 5 members to design and implement a Fake News Detection surpassing SOTA by 14.9%.</li>
              <li>Utilized React.js to design user interface, enabling smooth user interactions for over 1,000 daily users.</li>
              <li>Engineered a scalable back-end architecture using Node.js and Express, handling over 10,000 API requests per day.</li>
              <li>Architected a CI/CD pipeline for the fake news detection application on Heroku, achieving 99.9% uptime.</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-[2rem]'>
            <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem]'>Software Developer</h1>
            <p className='text-[16px] text-[#d3d2d2] mb-[1.5rem]'>Iha Pragyan<br/>Feb 2021 – May 2021<br/> Hyderabad, India</p>
            <ul className='text-[14px] text-[#d3d2d2] font-sans list-disc list-outside text-left space-y-2'>
              <li>Boosted task management efficiency by 20% in team GhettoGroupo through advanced CRUD functionality.</li>
              <li>Integrated Stripe checkout, leading to a rise in successful transactions and streamlined authentication processes.</li>
              <li>Established developer portal for REST API access, attracting 30% more third-party integrations like social media sharing.</li>
              <li>Introduced Whiteboard and audio rooms, elevating user engagement by 25% in project discussions & breaks.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
