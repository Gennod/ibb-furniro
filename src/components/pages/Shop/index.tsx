import { Products } from '../../ui/Products'
import { MyBreadcrumbs } from '../../ui/breadcrumbs'

const Shop = () => {
	return (
		<div>
			<div className="flex h-80 items-center justify-center bg-[url(/shop/bg.jpg)]">
				<div className="flex flex-col justify-center gap-2">
					<h2 className="text-5xl font-medium">Shop</h2>
					<MyBreadcrumbs />
				</div>
			</div>
			<Products
				isTitle={false}
				limit={16}
			/>
		</div>
	)
}

export default Shop
