import ProductsPagination from '../../ui/Pagination'
import { Products } from '../../ui/Products'
import { MyBreadcrumbs } from '../../ui/breadcrumbs'

import { ShopFilter } from './components/ShopFilter'

// TODO: Сделать множественные теги. Сейчас при добавлении больше двух тегов они не работают

const Shop = () => {
	return (
		<div>
			<div className="flex h-80 items-center justify-center bg-[url(/shop/bg.jpg)]">
				<div className="flex flex-col justify-center gap-2">
					<h2 className="text-5xl font-medium">Shop</h2>
					<MyBreadcrumbs />
				</div>
			</div>
			<div className="pb-5">
				<ShopFilter />
				<Products isTitle={false} />
				<ProductsPagination />
			</div>
		</div>
	)
}

export default Shop
