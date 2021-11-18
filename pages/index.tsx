import React from 'react'
import Head from 'next/head'

import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import { Hero, Featured, SkillsAbout } from '../src/components/Home'

const App = () => {
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
			</Head>
			<Hero />
			<NavBar locked={false} startpage />
			<Featured />
			<SkillsAbout />
			<Footer />
		</>
	)
}

export default App
