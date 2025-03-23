import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts } from '../../store/reducers/products'

interface ProductsProps {
	isTitle?: boolean
	fixedLimit?: number
}

export const Products: React.FC<ProductsProps> = ({ isTitle, fixedLimit }) => {
	const dispatch = useAppDispatch()
	const { filteredProducts, status, limit, currentPage } = useAppSelector(
		state => state.products
	)

	const startIndex = (currentPage - 1) * limit
	const endIndex = startIndex + limit
	const currentProducts = filteredProducts.slice(startIndex, endIndex)

	useEffect(() => {
		dispatch(fetchProducts())
		console.log(filteredProducts)
	}, [dispatch, limit, fixedLimit])

	if (status === 'succeed') {
		return (
			<div className="pt-14">
				{isTitle && (
					<h2 className="text-center text-4xl font-bold">Our Products</h2>
				)}
				<ul className="relative grid grid-cols-3 gap-8 px-24 py-10">
					{currentProducts.map(product => (
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
								<div className="flex items-center justify-between">
									<ul className="flex gap-5 text-(--color-primary)">
										{product.tags.map(tag => (
											<li>{tag}</li>
										))}
									</ul>
									<p className="text-2xl text-yellow-700">{product.rating}</p>
								</div>
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
