import { Rating } from '@mui/material'
import { Star } from 'lucide-react'
import { useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { fetchProductById } from '../../../store/reducers/products'
import { getTagColor } from '../../../utils/getTagColor'
import ProductBadge from '../../ui/ProductBadge'
import { ProductSkeleton } from '../../ui/ProductsComponents/ProductSkeleton'

const ProductPage = () => {
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
			<div className="py-12">
				<div className="mx-auto flex max-w-7xl justify-center gap-20">
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
								{(
									product.price *
									(1 - product.discountPercentage / 100)
								).toFixed(2)}
								$
							</div>
							<div className="text-sm text-(--color-light-gray) line-through">
								{product.price}$
							</div>
						</div>
						<ul className="mt-2 flex flex-wrap gap-2 text-(--color-primary)">
							{product.tags.map(tag => (
								<li key={tag}>
									<button
										value={tag}
										className={`rounded-full px-2 py-1 text-xs ${getTagColor(tag)}`}
									>
										{tag}
									</button>
								</li>
							))}
						</ul>
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
				<h2 className="my-3 text-center text-2xl font-bold">Reviews</h2>
				<ul className="flex items-center justify-between gap-5 px-10">
					{product.reviews.map((review, idx) => (
						<li
							key={idx}
							className="flex grow flex-col flex-wrap gap-3 rounded-xl border px-3 py-1.5"
						>
							<div className="flex flex-col">
								<p className="text-xl font-semibold">{review.reviewerName}</p>
								<p className="text-sm text-(--color-light-gray)">
									{review.reviewerEmail}
								</p>
							</div>
							<div className="">{review.comment}</div>
							<div className="flex justify-between">
								<div className="text-sm text-(--color-light-gray)">
									{new Date(review.date).toLocaleDateString()}
								</div>
								<div className="flex items-center gap-1 text-2xl text-yellow-700">
									<Star />
									{review.rating}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
export default ProductPage
