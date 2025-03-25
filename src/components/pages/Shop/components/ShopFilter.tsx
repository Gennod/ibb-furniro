import { SlidersHorizontal, X } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { deleteTag } from '../../../../store/reducers/products'
import BasicSelect from '../../../ui/Select'

export const ShopFilter = () => {
	const { filteredProducts, limit, currentPage, tagFilter } = useAppSelector(
		state => state.products
	)
	const dispatch = useAppDispatch()
	const startIndex = (currentPage - 1) * limit
	const endIndex = Math.min(startIndex + limit, filteredProducts.length)

	const handleTagDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(deleteTag(event.currentTarget.value))
	}

	return (
		<div className="flex flex-col gap-2 bg-(--color-primary)/20 px-24 py-10">
			<div className="flex items-center justify-between">
				<div className="flex gap-7">
					<button className="flex gap-2">
						<SlidersHorizontal /> <p>Filter</p>
					</button>
					<div className="w-0.5 bg-neutral-400"></div>
					<div>
						Showing {startIndex + 1}-{endIndex} of {filteredProducts.length}{' '}
						results
					</div>
				</div>
				<div className="flex gap-8">
					<div className="flex items-center gap-3">
						<p>Show</p>
						<BasicSelect type="SHOW" />
					</div>
					<div className="flex items-center gap-3">
						<p>Sort By</p>
						<BasicSelect type="SORT" />
					</div>
				</div>
			</div>
			<ul className="flex gap-3">
				{tagFilter.map((tag, idx) => (
					<li key={idx}>
						<button
							onClick={handleTagDelete}
							value={tag}
							className="flex cursor-pointer rounded-2xl border-2 p-1 hover:bg-orange-200"
						>
							<X /> {tag}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
