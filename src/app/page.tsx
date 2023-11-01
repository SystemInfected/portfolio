import Featured from '@/components/Featured/Featured'
import Hero from '@/components/Hero/Hero'
import NavBar from '@/components/NavBar'

const Home = () => {
	return (
		<>
			<Hero />
			<NavBar locked={false} startpage />
			<Featured />
		</>
	)
}

export default Home
