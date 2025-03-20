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
				<ul className="relative grid grid-cols-3 gap-8 px-24 py-10">
					{products.map(product => (
						<li
							key={product.id}
							className="flex flex-col rounded bg-(--color-gray)"
						>
							<img
								src={product.thumbnail}
								alt={product.title}
							/>
							<div className="container flex grow flex-col gap-2 px-4 pt-4 pb-8">
								<p className="overflow-hidden text-2xl font-semibold text-nowrap overflow-ellipsis">
									{product.title}
								</p>
								<p className="grow text-sm text-ellipsis text-(--color-dark-gray)">
									{product.description}
								</p>
								<div className="text-lg font-semibold">{product.price}$</div>
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
