import React from 'react'
import Head from 'next/head'

import Hero from '../src/components/Hero'
import NavBar from '../src/components/NavBar'
import Featured from '../src/components/Featured'
import SkillsAbout from '../src/components/SkillsAbout'
import Footer from '../src/components/Footer'

const App = () => {
	return (
		<>
			<Head>
				<title>
					Graphic designer &amp; web developer based in Stockholm, Sweden &bull;
					Sebastian Widin's portfolio
				</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
				/>
				<meta name='theme-color' content='#000000' />
			</Head>
			<Hero />
			<NavBar locked={false} />
			<Featured />
			<SkillsAbout />
			<Footer />
		</>
	)
}

export default App
