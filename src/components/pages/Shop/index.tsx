import { SlidersHorizontal } from 'lucide-react'

import { useAppSelector } from '../../../store/hooks'
import { MyBreadcrumbs } from '../../ui/Breadcrumbs'
import ProductsPagination from '../../ui/Pagination'
import { Products } from '../../ui/Products'
import BasicSelect from '../../ui/Select'

const Shop = () => {
	const { products, filteredProducts, limit, currentPage } = useAppSelector(
		state => state.products
	)

	const startIndex = (currentPage - 1) * limit
	const endIndex = Math.min(startIndex + limit, filteredProducts.length)
	const currentProducts = filteredProducts.slice(startIndex, endIndex)

	return (
		<div>
			<div className="flex h-80 items-center justify-center bg-[url(/shop/bg.jpg)]">
				<div className="flex flex-col justify-center gap-2">
					<h2 className="text-5xl font-medium">Shop</h2>
					<MyBreadcrumbs />
				</div>
			</div>
			<div className="pb-5">
				<div className="flex items-center justify-between bg-(--color-primary)/20 px-24 py-10">
					<div className="flex gap-7">
						<button className="flex cursor-pointer gap-2">
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
				<Products isTitle={false} />
				<ProductsPagination />
			</div>
		</div>
	)
}

export default Shop
