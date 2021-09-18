import React from 'react'
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
			<NavBar locked />
			<div style={{ height: '200vh' }} />
		</>
	)
}

export default Portfolio

{
	/* <div>
			<h1>Welcome to my blog</h1>
			{posts.map((post) => (
				<div key={`post-${post.id}`}>
					<Link
						href={{
							pathname: ROUTE_POST_ID,
							query: { id: post.id },
						}}
					>
						<a>{post.title}</a>
					</Link>
				</div>
			))}
		</div> */
}
