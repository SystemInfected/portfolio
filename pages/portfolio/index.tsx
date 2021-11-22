import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'

import NavBar from '../../src/components/NavBar'
import Footer from '../../src/components/Footer'
import { PortfolioCard } from '../../src/components/Portfolio'
import { breakpoint, color } from '../../styles/variables'
import SectionHeader from '../../src/components/SectionHeader'

export interface PortfolioDataProps {
	order: number
	title: string
	slug: string
	url: string | null
	source: string | null
	responsibilities: string
	tags: string
	tech: string
	images: [string]
}

interface PortfolioProps {
	data: [PortfolioDataProps]
	images: [string]
}

const Portfolio = ({ data, images }: PortfolioProps) => {
	data.sort((a, b) => (a.order < b.order ? 1 : -1))
	const imagePreload = images
		.filter((image) => image !== 'clients' && image !== 'thumbs')
		.map((image) => (
			<link rel='preload' as='image' href={`../images/${image}`} />
		))
	return (
		<>
			<Head>
				<title>
					My Portfolio | Graphic designer & web developer based in Stockholm,
					Sweden • Sebastian Widin's portfolio
				</title>

				<meta
					name='description'
					content='I am a graphic designer and web developer from Stockholm, Sweden. I love design but have a passion for functionality and user-friendly sites.'
				/>
				<meta
					name='image'
					content='https://sebastianwidin.se/images/og_header.jpg'
				/>

				<meta
					name='og:title'
					content="My Portfolio | Graphic designer & web developer based in Stockholm, Sweden • Sebastian Widin's portfolio"
				/>
				<meta
					name='og:description'
					content='I am a graphic designer and web developer from Stockholm, Sweden. I love design but have a passion for functionality and user-friendly sites.'
				/>
				<meta
					name='og:image'
					content='https://sebastianwidin.se/images/og_header.jpg'
				/>
				<meta name='og:url' content='https://sebastianwidin.se/' />
				<meta
					name='og:site_name'
					content="My Portfolio | Graphic designer & web developer based in Stockholm, Sweden • Sebastian Widin's portfolio"
				/>
				<meta name='fb:admins' content='100041376167594' />
				<meta name='og:type' content='website' />
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
				/>
				<meta name='theme-color' content='#000000' />
				{imagePreload}
			</Head>
			<NavBar locked startpage={false} />
			<Section>
				<PortfolioGridSection>
					<SectionHeader>Selected projects</SectionHeader>
					<PortfolioGrid>
						{data.map((d) => (
							<Link href={`/portfolio/${d.slug}`} key={`post-${d.slug}`}>
								<a>
									<PortfolioCard data={d} />
								</a>
							</Link>
						))}
					</PortfolioGrid>
				</PortfolioGridSection>
			</Section>
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

	const images = fs.readdirSync(path.join('public', 'images'))

	return {
		props: {
			data: parsedData.map((data) => data),
			images,
		},
	}
}

export default Portfolio

const Section = styled.section`
	background: rgba(${color.mainColorDarkRGB}, 0.5);
	display: flex;
	justify-content: center;
	width: 100%;
`

const PortfolioGridSection = styled.div`
	max-width: ${breakpoint.maxWidth};
	overflow: hidden;
	padding: 0 max(4rem, env(safe-area-inset-left));
	padding-bottom: 5em;
	width: 100%;
	@media screen and (max-width: ${breakpoint.tablet}) {
		padding: 0 2.5em;
		padding-bottom: 5em;
	}
`

const PortfolioGrid = styled.div`
	display: grid;
	grid-gap: 2.5em 6em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-content: space-between;
	margin-bottom: 6em;
	width: 100%;
	@media screen and (max-width: ${breakpoint.tabletBig}) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media screen and (max-width: ${breakpoint.mobileBig}) {
		grid-template-columns: 1fr;
	}
	a:hover,
	a:focus {
		text-decoration: none;
	}
`
