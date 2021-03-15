import React from 'react'
import styled from 'styled-components'

const Portraits = (props) => {
	console.log(props)
	if (props.illustration) {
		return <Illustration />
	}
	return <Nodes />
}

export default Portraits

const Illustration = styled.div`
	height: 100%;
	width: 100px;
	background-color: red;
`

const Nodes = styled.div`
	height: 100%;
	width: 100px;
	background-color: red;
`
