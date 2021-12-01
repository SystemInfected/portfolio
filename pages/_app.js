import React from 'react'
import '../styles/Main.scss'
import { MyProvider } from '../src/components/Context/ContextProvider'

function MyApp({ Component, pageProps }) {
	return (
		<MyProvider>
			<Component {...pageProps} />
		</MyProvider>
	)
}

export default MyApp
