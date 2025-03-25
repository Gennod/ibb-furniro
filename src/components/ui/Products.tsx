import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts } from '../../store/reducers/products'

import { ProductItem } from './ProductsComponents/ProductItem'
import { ProductSkeleton } from './ProductsComponents/ProductSkeleton'

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
	}, [dispatch, limit, fixedLimit])

	if (status === 'succeed') {
		return (
			<div className="pt-14">
				{isTitle && (
					<h2 className="text-center text-4xl font-bold">Our Products</h2>
				)}
				<ul className="relative grid grid-cols-3 gap-8 px-24 py-10">
					{currentProducts.map(product => (
						<ProductItem
							key={product.id}
							id={product.id}
							thumbnail={product.thumbnail}
							title={product.title}
							description={product.description}
							price={product.price}
							rating={product.rating}
							tags={product.tags}
						/>
					))}
				</ul>
			</div>
		)
	}
	return (
		<ProductSkeleton
			isTitle={isTitle}
			fixedLimit={fixedLimit}
		/>
	)
}
