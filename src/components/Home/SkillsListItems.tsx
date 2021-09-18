import React from 'react'
import skillsData from '../../data/skillsData'

const SkillsListItems = () => {
	const skillsContent = Object.values(skillsData).map((skillContent) => {
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
	})

	return <>{skillsContent}</>
}

export default SkillsListItems
