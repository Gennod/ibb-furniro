import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../../store/hooks'
import { filterByTag } from '../../../store/reducers/products'
import { getTagColor } from '../../../utils/getTagColor'

interface ProductItemProps {
	id: number
	thumbnail: string
	title: string
	description: string
	price: number
	rating: number
	tags: string[]
	disableTags?: boolean
	discountPercentage: number
}

export const ProductItem: React.FC<ProductItemProps> = ({
	thumbnail,
	id,
	title,
	description,
	price,
	rating,
	tags,
	disableTags,
	discountPercentage
}) => {
	const dispatch = useAppDispatch()
	const handleTagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(filterByTag(event.currentTarget.value))
	}

	return (
		<li className="relative flex flex-col rounded bg-(--color-gray)">
			{discountPercentage > 0 && (
				<div className="absolute top-1 right-1 z-10 rounded-full bg-red-500 px-2 py-1 text-white">
					-{discountPercentage}%
				</div>
			)}
			<div className="h-48 w-full overflow-hidden">
				<img
					src={thumbnail}
					alt={title}
					className="lazy-img h-full w-full object-cover"
					loading="lazy"
					onLoad={e => e.currentTarget.setAttribute('loaded', 'true')}
				/>
			</div>
			<div className="container flex grow flex-col gap-2 px-4 pt-4 pb-8">
				<p className="overflow-hidden text-2xl font-semibold text-nowrap overflow-ellipsis">
					{title}
				</p>
				<p className="grow text-sm text-ellipsis text-(--color-dark-gray)">
					{description}
				</p>
				<div className="flex items-center gap-5">
					<div className="text-lg font-semibold">
						{(price * (1 - discountPercentage / 100)).toFixed(2)}$
					</div>
					<div className="text-sm text-(--color-light-gray) line-through">
						{price}$
					</div>
				</div>
				<div className="flex items-center justify-between">
					{!disableTags && (
						<ul className="flex flex-wrap gap-2 text-(--color-primary)">
							{tags.map(tag => (
								<li key={tag}>
									<button
										onClick={handleTagClick}
										value={tag}
										className={`cursor-pointer rounded-full px-2 py-1 text-xs ${getTagColor(tag)}`}
									>
										{tag}
									</button>
								</li>
							))}
						</ul>
					)}
					<p className="flex items-center gap-1 text-2xl text-yellow-700">
						<Star />
						{rating}
					</p>
				</div>
				<Link
					to={`/product/${id}`}
					className="mt-4 inline-block rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
				>
					Посмотреть
				</Link>
			</div>
		</li>
	)
}
