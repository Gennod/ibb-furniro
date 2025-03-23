import { Products } from '../../ui/Products'

import { Promo } from './components/Promo'

const Home = () => {
	return (
		<>
			<Promo />
			<Products
				isTitle={true}
				fixedLimit={8}
			/>
		</>
	)
}

export default Home
