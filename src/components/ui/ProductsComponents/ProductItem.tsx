import { useAppDispatch } from '../../../store/hooks'
import { filterByTag } from '../../../store/reducers/products'

interface ProductItemProps {
	id: number
	thumbnail: string
	title: string
	description: string
	price: number
	rating: number
	tags: string[]
}

export const ProductItem: React.FC<ProductItemProps> = ({
	thumbnail,
	title,
	description,
	price,
	rating,
	tags
}) => {
	const dispatch = useAppDispatch()
	const handleTagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(filterByTag(event.currentTarget.value))
	}

	return (
		<li className="flex flex-col rounded bg-(--color-gray)">
			<div className="h-48 w-full overflow-hidden">
				<img
					src={thumbnail}
					alt={title}
					className="h-full w-full object-cover"
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
				<div className="text-lg font-semibold">{price}$</div>
				<div className="flex items-center justify-between">
					<ul className="flex gap-5 text-(--color-primary)">
						{tags.map(tag => (
							<li key={tag}>
								<button
									onClick={handleTagClick}
									className="cursor-pointer"
									value={tag}
								>
									{tag}
								</button>
							</li>
						))}
					</ul>
					<p className="text-2xl text-yellow-700">{rating}</p>
				</div>
			</div>
		</li>
	)
}
