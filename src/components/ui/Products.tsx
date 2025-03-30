import React, { useEffect, useLayoutEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts, setLimit } from '../../store/reducers/products'

import { ProductItem } from './ProductsComponents/ProductItem'
import { ProductsSkeleton } from './ProductsComponents/ProductsSkeleton'

interface ProductsProps {
	isTitle?: boolean
	fixedLimit?: number
	isHomePage?: boolean
}

export const Products: React.FC<ProductsProps> = ({
	isTitle,
	fixedLimit,
	isHomePage
}) => {
	const dispatch = useAppDispatch()
	const { filteredProducts, products, status, limit, currentPage } =
		useAppSelector(state => state.products)
	const productsToShow = isHomePage ? products : filteredProducts

	const startIndex = (currentPage - 1) * limit
	const endIndex = startIndex + limit
	const currentProducts = productsToShow.slice(startIndex, endIndex)

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [currentPage])

	useEffect(() => {
		dispatch(fetchProducts())
		console.log(filteredProducts)

		if (isHomePage) {
			dispatch(setLimit(8))
		}
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
							disableTags={isHomePage}
							discountPercentage={product.discountPercentage}
						/>
					))}
				</ul>
			</div>
		)
	}
	return (
		<ProductsSkeleton
			isTitle={isTitle}
			fixedLimit={fixedLimit}
		/>
	)
}
