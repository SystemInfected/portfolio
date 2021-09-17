import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../../src/components/NavBar'

const ROUTE_POST_ID = 'portfolio/[id]'
const posts = [
	{
		id: 1,
		title: 'Post #1',
	},
	{
		id: 2,
		title: 'Post #2',
	},
]
const Portfolio = () => {
	return (
		<>
			<Head>
				<title>
					My Portfolio | Graphic designer &amp; web developer based in
					Stockholm, Sweden &bull; Sebastian Widin's portfolio
				</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
				/>
				<meta name='theme-color' content='#000000' />
			</Head>
			<NavBar locked={true} />
			<div style={{ height: '200vh' }}></div>
		</>
	)
}

export default Portfolio
