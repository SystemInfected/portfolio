import Hero from '@/components/Home/Hero'
import NavBar from '@/components/NavBar'

const Home = () => {
	return (
		<>
			<Hero />
			<NavBar locked={false} startpage />
		</>
	)
}

export default Home
