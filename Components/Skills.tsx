import React from 'react'
import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Educ<span className='text-yellow-400'>ation</span></h1>
      <div className='w-[90%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkillsItem title="Master Of Science, Computer Science" year="Aug 2022 - May 2024" university="Arizona State University, Tempe, Arizona" 
            courses="Foundations of Algorithms, Software Security, Data Mining, Knowledge Representation and Reasoning, Information Assurance and Security,
            Human Computer Interaction, Applied Cryptography, Mobile Computing, Data Processing at Scale, Semantic Web Mining."/>
        </div>

        <div>
            <SkillsItem title="Bachelor of Technology, Computer Science" year="Aug 2018 - May 2022" university="Indian Institute of Information Technology, SriCity, India" 
            courses="Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, Web Application Development, 
            Information Retrieval, Machine Learning, Computer Vision, Digital Image Processing."/>
        </div>
      </div>
    </div>
  )
}

export default Skills
