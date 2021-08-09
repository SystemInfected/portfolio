const HistoryListItems = () => {
	const historyItems = [
		{
			year: 2021,
			yearEvents: [
				{
					data:
						'<span>new workplace</span> Software developer <span>TECHNIA AB</span>',
					type: 'professional',
				},
			],
		},
		{
			year: 2020,
			yearEvents: [{ data: 'My son was born', type: 'personal' }],
		},
		{
			year: 2019,
			yearEvents: [{ data: 'Got married', type: 'personal' }],
		},
		{
			year: 2012,
			yearEvents: [
				{
					data:
						'<span>new workplace</span> Graphic designer <span>US-AB Print Shop</span>',
					type: 'professional',
				},
				{ data: 'My daughter was born', type: 'personal' },
			],
		},
		{
			year: 2009,
			yearEvents: [
				{
					data: 'Did my first freelance website job',
					type: 'professional',
				},
			],
		},
		{
			year: 2005,
			yearEvents: [
				{
					data: 'Started learning web development',
					type: 'professional',
				},
			],
		},
	]
	91
	const historyItemsContent = Object.values(historyItems).map((yearContent) => {
		const yearEvents = yearContent.yearEvents.map((event, index) => {
			return (
				<li
					key={yearContent.year + '_' + index}
					id={event.type}
					dangerouslySetInnerHTML={{ __html: event.data }}
				></li>
			)
		})
		return (
			<li key={yearContent.year} id='year'>
				<h3>{yearContent.year}</h3>
				<ul>{yearEvents}</ul>
			</li>
		)
	})

	return <>{historyItemsContent}</>
}

export default HistoryListItems
