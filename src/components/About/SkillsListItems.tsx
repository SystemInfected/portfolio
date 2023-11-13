import React from 'react'

import skillsData from '@/app/data/skillsData.json'

const SkillsListItems = () => {
  return (
    <>
      {Object.values(skillsData).map((skillContent) => {
        const skills = skillContent.skills.map((skill, index) => {
          return (
            <li
              key={`${skillContent.type}_${skill}_${index}`}
              id={skill}
              className='skill'
            >
              {skill}
            </li>
          )
        })
        return (
          <li
            key={skillContent.type}
            id={`skill_${skillContent.type}`}
            className='skillsBox'
          >
            <h3>{skillContent.type}</h3>
            <ul>{skills}</ul>
          </li>
        )
      })}
    </>
  )
}

export default SkillsListItems
