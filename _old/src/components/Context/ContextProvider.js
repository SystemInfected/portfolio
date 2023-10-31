import React, { useState, useContext } from 'react'

const MyContext = React.createContext()

export function useMyContext() {
	return useContext(MyContext)
}

export function MyProvider({ children }) {
	const [pageEnter, setPageEnter] = useState(true)

	return (
		<MyContext.Provider value={{ pageEnter, setPageEnter }}>
			{children}
		</MyContext.Provider>
	)
}
