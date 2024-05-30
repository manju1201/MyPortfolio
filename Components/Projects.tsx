// import Image from 'next/image'
// import React from 'react'

// const Projects = () => {
//   return (
//     <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
//       <h1 className='heading'>
//         Pro<span className='text-yellow-400'>Jects</span>
//       </h1>    
//       <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 
//       md:grid-cols-2 lg:grid-cols-4 gap-[2rem]'>
//         <div data-aos="fade-up">
//           <div className='transform cursor-pointer hover:-translate-y-6 
//           transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
//             <Image 
//               src="/images/p1.jpg"
//               alt='portfolio'
//               layout='fill'
//               className='object-contain'
//             />
//           </div>
//         </div>
//         <div data-aos="fade-up" data-aos-delay="300">
//           <div className='transform cursor-pointer hover:-translate-y-6 
//           transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
//             <Image 
//               src="/images/p2.jpg"
//               alt='portfolio'
//               layout='fill'
//               className='object-contain'
//             />
//           </div>
//         </div>
//         <div data-aos="fade-up" data-aos-delay="600">
//           <div className='transform cursor-pointer hover:-translate-y-6 
//           transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
//             <Image 
//               src="/images/p3.jpg"
//               alt='portfolio'
//               layout='fill'
//               className='object-contain'
//             />
//           </div>
//         </div>
//         <div data-aos="fade-up" data-aos-delay="900">
//           <div className='transform cursor-pointer hover:-translate-y-6 
//           transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
//             <Image 
//               src="/images/p4.jpg"
//               alt='portfolio'
//               layout='fill'
//               className='object-contain'
//             />
//           </div>
//         </div>
//       </div>  
//     </div>
//   )
// }

// export default Projects


import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const projectData = [
    {
      title: 'Project One',
      image: '/images/guardian-angel.jpg',
      githubLink: 'https://github.com/manju1201/project-one',
      description: 'This is a brief description of Project One.This is a brief description of Project One.This is a brief description of Project One.This is a brief description of Project One.',
      skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Django']
    },
    {
      title: 'Project Two',
      image: '/images/p2.jpg',
      githubLink: 'https://github.com/manju1201/project-two',
      description: 'This is a brief description of Project Two.',
      skills: ['Python', 'Django', 'HTML']
    },
    {
      title: 'Project Three',
      image: '/images/p3.jpg',
      githubLink: 'https://github.com/manju1201/project-three',
      description: 'This is a brief description of Project Three.',
      skills: ['Java', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Project Four',
      image: '/images/p4.jpg',
      githubLink: 'https://github.com/manju1201/project-four',
      description: 'This is a brief description of Project Four.',
      skills: ['C++', 'Qt', 'OpenGL']
    }
  ];

  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>
        Important <span className='text-yellow-400'>Projects</span>
      </h1>    
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 
      md:grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
        {projectData.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 300} className='bg-[#09101a] p-2 rounded-xl' style={{boxShadow: "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"}}>
            <div className='transform cursor-pointer hover:-translate-y-6 
            transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
              <Image 
                src={project.image}
                alt={project.title}
                layout='fill'
                className='object-contain'
              />
            </div>
            <div className='text-white mt-[1rem] flex flex-col items-center'>
              <h2 className='text-[20px] font-bold text-center hover:text-teal-300'>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center space-x-2 '>
                  {project.title} &nbsp;
                  <FontAwesomeIcon icon={faGithub} className="text-white w-[1.2rem] h-[1.2rem] hover:text-teal-300" />
                </a>
              </h2>
              <p className='text-[16px] mt-[0.5rem] text-center'>{project.description}</p>
              <div className='mt-[0.5rem]'>
                <h3 className='font-semibold text-center'>Skills Used:</h3>
                <div className='grid grid-cols-4 gap-12 p-4'>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 0).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 1).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 2).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 3).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  )
}

export default Projects

