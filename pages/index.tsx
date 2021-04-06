import Head from 'next/head'

import Hero from '../src/components/Hero'
import NavBar from '../src/components/NavBar'
import Featured from '../src/components/Featured'

const App = () => {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
			</Head>
			<Hero />
			<NavBar />
			<Featured />
		</>
	)
}

export default App
