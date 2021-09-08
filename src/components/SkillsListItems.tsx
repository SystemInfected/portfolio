const SkillsListItems = () => {
	const skillsItems = [
		{
			type: 'software',
			skills: [
				'photoshop',
				'illustrator',
				'indesign',
				'animate',
				'after effects',
				'premiere pro',
			],
		},
		{
			type: 'development',
			skills: [
				'php',
				'css',
				'html',
				'javascript',
				'jquery',
				'ajax',
				'sql/pdo',
				'rwd',
			],
		},
		{
			type: 'audio',
			skills: ['ableton live', 'logic pro', 'ni maschine', 'fl studio'],
		},
	]

	const skillsContent = Object.values(skillsItems).map((skillContent) => {
		const skills = skillContent.skills.map((skill, index) => {
			return (
				<li key={skillContent.type + '_' + index} id={skill}>
					{skill}
				</li>
			)
		})
		return (
			<li key={skillContent.type} id={'skill_' + skillContent.type}>
				<h3>{skillContent.type}</h3>
				<ul>{skills}</ul>
			</li>
		)
	})

	return <>{skillsContent}</>
}

export default SkillsListItems
