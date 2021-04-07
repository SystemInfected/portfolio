import { data as featuredData } from '../data/featuredData'

const FeaturedCard = (props) => {
	const cardData = featuredData[props.work][0]
	return <div>{cardData.title}</div>
}

export default FeaturedCard
