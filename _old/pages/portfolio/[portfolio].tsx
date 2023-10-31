import React from 'react'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

import { useMyContext } from '../../src/components/Context/ContextProvider'

import NavBar from '../../src/components/NavBar'
import Footer from '../../src/components/Footer'
import { Header, Content } from '../../src/components/Portfolio'
import { PortfolioDataProps } from '.'

interface DetailedPortfolioProps {
	htmlString: string
	data: PortfolioDataProps
}

const DetailedPortfolio = ({ htmlString, data }: DetailedPortfolioProps) => {
	const { setPageEnter } = useMyContext()
	setPageEnter(false)

	const renderDescription = (input: string, length: number) => {
		const strippedInput = input.replace(/<\/?[^>]+(>|$)/g, '')
		return strippedInput.length > length
			? `${strippedInput.substring(0, length)}...`
			: strippedInput
	}

	return (
		<>
			<Head>
				<title>
					{data.title} - A project by Sebastian Widin • Graphic Designer, Web
					Developer & Full-Stack Software Developer based in Stockholm, Sweden
				</title>

				<meta
					name='description'
					content={`${data.title} - ${renderDescription(htmlString, 140)}`}
				/>
				<meta
					name='image'
					content='https://sebastianwidin.se/images/og_header.jpg'
				/>

				<meta
					name='og:title'
					content={`${data.title} - A project by Sebastian Widin • Graphic Designer, Web Developer & Full-Stack Software Developer based in Stockholm, Sweden`}
				/>
				<meta
					name='og:description'
					content={`${data.title} - ${renderDescription(htmlString, 140)}`}
				/>
				<meta
					name='og:image'
					content='https://sebastianwidin.se/images/og_header.jpg'
				/>
				<meta name='og:url' content='https://sebastianwidin.se/' />
				<meta
					name='og:site_name'
					content={`${data.title} - A project by Sebastian Widin • Graphic Designer, Web Developer & Full-Stack Software Developer based in Stockholm, Sweden`}
				/>
				<meta name='fb:admins' content='100041376167594' />
				<meta name='og:type' content='website' />
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
				/>
				<meta name='theme-color' content='#000000' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/favicons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicons/favicon-16x16.png'
				/>
				<link rel='manifest' href='/images/favicons/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/images/favicons/safari-pinned-tab.svg'
					color='#1e1f2d'
				/>
				<link rel='shortcut icon' href='/images/favicons/favicon.ico' />
				<meta name='msapplication-TileColor' content='#1e1f2d' />
				<meta
					name='msapplication-config'
					content='/images/favicons/browserconfig.xml'
				/>
				<meta name='theme-color' content='#1e1f2d' />
			</Head>
			<NavBar locked startpage={false} />
			<Header
				title={data.title}
				responsibilities={data.responsibilities}
				tags={data.tags}
				images={data.images}
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
