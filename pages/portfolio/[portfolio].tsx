import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBar from '../../src/components/NavBar'
import Footer from '../../src/components/Footer'

const DetailedPortfolio = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<Head>
				<title>
					{id} | Graphic designer &amp; web developer based in Stockholm, Sweden
					&bull; Sebastian Widin's portfolio
				</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
				/>
				<meta name='theme-color' content='#000000' />
			</Head>
			<NavBar locked />
			<p>Post: {id}</p>
			<div style={{ height: '200vh' }} />
			<Footer />
		</>
	)
}

export default DetailedPortfolio
