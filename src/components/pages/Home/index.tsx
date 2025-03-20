import { Products } from '../../ui/Products'

import { Promo } from './components/Promo'

const Home = () => {
	return (
		<>
			<Promo />
			<Products
				isTitle={true}
				limit={8}
			/>
		</>
	)
}

export default Home
