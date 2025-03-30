import { Rating } from '@mui/material'
import { useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { fetchProductById } from '../../../store/reducers/products'
import ProductBadge from '../../ui/ProductBadge'
import { ProductSkeleton } from '../../ui/ProductsComponents/ProductSkeleton'

export const ProductPage = () => {
	const { productId } = useParams<{ productId: string }>()
	const product = useAppSelector(
		state =>
			state.products.filteredProducts.find(p => p.id === Number(productId)) ||
			state.products.currentProduct
	)
	const { status, currentPage } = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [currentPage])

	useEffect(() => {
		if (productId) {
			dispatch(fetchProductById(productId))
		}
	}, [productId, dispatch])

	if (status === 'pending' || !product) {
		return (
			<div className="mx-auto flex max-w-7xl justify-center gap-20 py-12">
				<ProductSkeleton />
			</div>
		)
	}

	if (status === 'succeed') {
		return (
			<div className="mx-auto flex max-w-7xl justify-center gap-20 py-12">
				<div className="relative min-w-80">
					{product.discountPercentage > 0 && (
						<div className="absolute top-1 right-1 z-10 rounded-full bg-red-500 px-2 py-1 text-white">
							-{product.discountPercentage}%
						</div>
					)}
					<img
						className="lazy-img"
						loading="lazy"
						src={product.thumbnail}
						alt={product.title}
						onLoad={e => e.currentTarget.setAttribute('loaded', 'true')}
					/>
				</div>
				<div>
					<h2 className="text-4xl">{product.title}</h2>
					<div className="flex items-center gap-5">
						<div className="text-lg font-semibold">
							{(product.price * (1 - product.discountPercentage / 100)).toFixed(
								2
							)}
							$
						</div>
						<div className="text-sm text-(--color-light-gray) line-through">
							{product.price}$
						</div>
					</div>
					<Rating
						className="my-4"
						name="half-rating-read"
						defaultValue={product.rating}
						precision={0.5}
						readOnly
					/>
					<p className="mb-5 max-w-96">{product.description}</p>
					<ProductBadge />
				</div>
			</div>
		)
	}
}
