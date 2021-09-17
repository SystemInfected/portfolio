import Head from 'next/head'
import { useRouter } from 'next/router'

const DetailedPortfolio = () => {
	const router = useRouter()
	const { id } = router.query

	return <p>Post: {id}</p>
}

export default DetailedPortfolio
