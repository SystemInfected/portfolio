import React from 'react'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import marked from 'marked'
import matter from 'gray-matter'

import NavBar from '../../src/components/NavBar'
import Footer from '../../src/components/Footer'
import { Header, Content } from '../../src/components/Portfolio'
import { PortfolioDataProps } from '.'

interface DetailedPortfolioProps {
	htmlString: string
	data: PortfolioDataProps
}

const DetailedPortfolio = ({ htmlString, data }: DetailedPortfolioProps) => {
	return (
		<>
			<Head>
				<title>
					{data.title} - A project by Sebastian Widin &bull; Graphic designer
					&amp; web developer based in Stockholm, Sweden
				</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
				/>
				<meta name='theme-color' content='#000000' />
			</Head>
			<NavBar locked startpage={false} />
			<Header
				title={data.title}
				responsibilities={data.responsibilities}
				tags={data.tags}
				headerImages={data.headerImages}
			/>
			<Content
				content={htmlString}
				title={data.title}
				tech={data.tech}
				url={data.url}
				source={data.source}
			/>
			<Footer />
		</>
	)
}

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join('data', 'portfolio'))
	const paths = files.map((filename) => ({
		params: {
			portfolio: filename.replace('.md', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params: { portfolio } }) => {
	const markdownWithMetadata = fs
		.readFileSync(path.join('data', 'portfolio', `${portfolio}.md`))
		.toString()

	const parsedMarkdown = matter(markdownWithMetadata)

	const htmlString = marked(parsedMarkdown.content)

	return {
		props: {
			htmlString,
			data: parsedMarkdown.data,
		},
	}
}

export default DetailedPortfolio
