import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

import NavBar from '../../src/components/NavBar'
import Footer from '../../src/components/Footer'

const ROUTE_POST_ID = 'portfolio/[id]'
const Portfolio = ({ slugs }) => {
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
			<div>
				{slugs.map((slug) => (
					<div key={`post-${slug}`}>
						<Link
							href={{
								pathname: ROUTE_POST_ID,
								query: { id: slug },
							}}
						>
							<a>{slug}</a>
						</Link>
					</div>
				))}
			</div>
			<div style={{ height: '200vh' }} />
			<Footer />
		</>
	)
}

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('data', 'portfolio'))
	return {
		props: {
			slugs: files.map((filename) => filename.replace('.md', '')),
		},
	}
}

export default Portfolio
