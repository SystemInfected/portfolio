import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import NavBar from '../../src/components/NavBar'
import Footer from '../../src/components/Footer'

export interface PortfolioDataProps {
	title: string
	slug: string
	url: string
	tags: string
}

interface PortfolioProps {
	data: [PortfolioDataProps]
}

const Portfolio = ({ data }: PortfolioProps) => {
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
				{data.map((d) => (
					<div key={`post-${d.slug}`}>
						<Link href={`/portfolio/${d.slug}`}>
							<a>{d.title}</a>
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
	const parsedData = await Promise.all(
		files.map((file) => {
			const markdownWithMetadata = fs
				.readFileSync(path.join('data', 'portfolio', `${file}`))
				.toString()
			const parsedMarkdown = matter(markdownWithMetadata)
			return parsedMarkdown.data
		})
	)

	return {
		props: {
			data: parsedData.map((data) => data),
		},
	}
}

export default Portfolio
