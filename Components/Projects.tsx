import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projectData = [
    {
      title: 'Chat Space - Messaging Application',
      image: '/images/chat-space.jpg',
      githubLink: 'https://github.com/manju1201/MessageApp',
      description: 'ChatSpace is a real-time chat application that leverages the MERN stack for seamless and secure communication.',
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"]
    },
    {
      title: 'Kaiznventory - Inventory Management',
      image: '/images/kaizntree.jpg',
      githubLink: 'https://github.com/manju1201/projectkaizntree',
      description: 'A comprehensive inventory management system for streamlined stock, order tracking, and sales handling.',
      skills: ["Django", "Django REST", "React", "JavaScript", "SQLite", "Netlify", "Postman", "Node.js", "npm"]
    },
    {
      title: 'SafeDrive Guardian',
      image: '/images/guardian-angel.jpg',
      githubLink: 'https://github.com/manju1201/Group-47-The-Driver-Monitoring-and-Analysis-through-Video-Inputs',
      description: 'Enhancing road safety with real-time monitoring and advanced driver behavior analysis.',
      skills: ["Kotlin", "Flask", "Python", "OpenCV", "TensorFlow", "Machine Learning", "API Development", "Android Development",]
    },
    {
      title: 'Fovus - Cloud Integration',
      image: '/images/aws.jpg',
      githubLink: 'https://github.com/manju1201/fovusAWSTask',
      description: 'A comprehensive cloud-based solution integrating S3, DynamoDB, EC2, and Lambda for dynamic data processing.',
      skills: ["React", "AWS S3", "AWS DynamoDB", "AWS EC2", "AWS Lambda", "API Gateway", "IAM Roles", "AWS Policies",]
    }
  ];

  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>
        Spotlight <span className='text-yellow-400'>Projects</span>
      </h1>    
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
        {projectData.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 300} className='bg-[#09101a] p-2 rounded-xl' style={{ boxShadow: "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
            <div className= 'transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
              <Image 
                src={project.image}
                alt={project.title}
                layout='fill'
                className='object-cover rounded-lg'
              />
            </div>
            <div className='text-white mt-[1rem] flex flex-col items-center'>
              <h2 className='text-[20px] font-bold text-center'>
                <div className='flex items-center justify-center space-x-2'>
                  {project.title} &nbsp;
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-white w-[1.2rem] h-[1.2rem] hover:text-teal-300" />
                  </a>
                </div>
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
  );
}

export default Projects;

