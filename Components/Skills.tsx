import React from 'react'
import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Educ<span className='text-yellow-400'>ation</span></h1>
      <div className='w-[90%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkillsItem title="Master Of Science, Computer Science" year="Aug 2022 - May 2024" university="Arizona State University, Tempe, Arizona" courses="newskill"/>
        </div>

        <div>
            <SkillsItem title="Bachelor of Technology, Computer Science" year="Aug 2018 - May 2022" university="Indian Institute of Information Technology, SriCity, India" courses="newskill"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
