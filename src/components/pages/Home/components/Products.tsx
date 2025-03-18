import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { fetchProducts } from '../../../../store/reducers/products'

export const Products = () => {
	const dispatch = useAppDispatch()
	const { products, status } = useAppSelector(state => state.products)

	useEffect(() => {
		dispatch(fetchProducts())
		console.log(products)
	}, [])

	if (status === 'succeed') {
		return (
			<div className="pt-14">
				<h2 className="text-center text-4xl font-bold">Our Products</h2>
				<ul>
					{products.map(product => (
						<li key={product.id}>
							<img
								src={product.thumbnail}
								alt={product.title}
							/>
							<div>
								<p>{product.title}</p>
								<p>{product.description}</p>
								<div>{product.price}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		)
	} else {
		return <div>Loading...</div>
	}
}
