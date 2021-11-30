import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'

import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import Intro from '../src/components/Home/Intro'

const Hero = dynamic(() => import('../src/components/Home/Hero'))
const Featured = dynamic(() => import('../src/components/Home/Featured'))
const SkillsAbout = dynamic(() => import('../src/components/Home/SkillsAbout'))

interface AppProps {
	images: [string]
}

const App = ({ images }: AppProps) => {
	const imagePreload = images
		.filter((image) => image !== 'clients' && image !== 'thumbs')
		.map((image) => (
			<link rel='preload' as='image' href={`../images/${image}`} />
		))

	const introDelay = 7

	return (
		<>
			<Head>
				<title>
					Graphic designer & web developer based in Stockholm, Sweden •
					Sebastian Widin's portfolio
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
					content="Graphic designer & web developer based in Stockholm, Sweden • Sebastian Widin's portfolio"
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
					content="Graphic designer & web developer based in Stockholm, Sweden • Sebastian Widin's portfolio"
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
			<Hero introDelay={introDelay} />
			<NavBar locked={false} startpage />
			<Featured />
			<SkillsAbout />
			<Footer />
			<Intro introDelay={introDelay} />
		</>
	)
}

export const getStaticProps = async () => {
	const images = fs.readdirSync(path.join('public', 'images'))

	return {
		props: {
			images,
		},
	}
}

export default App
