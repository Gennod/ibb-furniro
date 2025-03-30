import { Trash } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { deleteFromCart } from '../../../store/reducers/products'
import { MyBreadcrumbs } from '../../ui/breadcrumbs'

export const Cart = () => {
	const { cartProducts } = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	const handleDeleteProduct = (id: number) => {
		dispatch(deleteFromCart(id))
	}

	return (
		<>
			<div className="flex h-80 items-center justify-center bg-[url(/shop/bg.jpg)]">
				<div className="flex max-w-5xl flex-col items-center py-10">
					<h2 className="mb-2 text-center text-4xl font-semibold">Cart</h2>
					<MyBreadcrumbs />
				</div>
			</div>
			<div className="flex gap-8 px-16 pt-16 pb-14">
				<div className="grow">
					<div className="grid grid-cols-6 gap-5 bg-(--color-secondary) py-3.5">
						<p className="col-start-2 col-end-3">Product</p>
						<p>Price</p>
						<p>Quantity</p>
						<p>Subtotal</p>
					</div>
					{cartProducts.map(({ product, quantity }) => (
						<div
							className="grid grid-cols-6 items-center gap-5"
							key={product.id}
						>
							<div className="relative">
								<img
									width={105}
									height={105}
									src={product.thumbnail}
									alt={product.title}
								/>
								<div className="absolute top-2 right-0 text-xs text-red-500">
									-{product.discountPercentage}%
								</div>
							</div>
							<div>{product.title}</div>
							<div>{product.price}$</div>
							<div className="">{quantity}</div>
							<div className="flex items-center gap-5">
								<p>
									{(
										quantity *
										product.price *
										(1 - product.discountPercentage / 100)
									).toFixed(2)}
									$
								</p>
								<p className="text-xs text-(--color-light-gray) line-through">
									{quantity * product.price}$
								</p>
							</div>
							<button
								onClick={() => handleDeleteProduct(product.id)}
								className="justify-self-end"
							>
								<Trash color="#b88e2f" />
							</button>
						</div>
					))}
				</div>
				<div className="bg-(--color-secondary) px-16 pt-3.5 pb-20">
					<h2 className="mb-16 text-2xl font-semibold">Cart Totals</h2>
					<div className="mb-10 flex flex-col gap-8">
						<div className="flex items-center justify-between gap-5">
							<p className="text-sm font-medium">Subtotal</p>
							<div className="text-sm font-normal text-(--color-light-gray)">
								Rs.
								{cartProducts
									.reduce(
										(sum, { product, quantity }) =>
											sum + product.price * quantity,
										0
									)
									.toFixed(2)}
							</div>
						</div>
						<div className="flex items-center justify-between gap-5">
							<p className="text-sm font-medium">Total</p>
							<div className="text-xl text-(--color-primary)">
								Rs.
								{cartProducts
									.reduce(
										(sum, { product, quantity }) =>
											sum +
											product.price *
												quantity *
												(1 - product.discountPercentage / 100),
										0
									)
									.toFixed(2)}
							</div>
						</div>
					</div>
					<button className="cursor-pointer rounded-xl border px-14 py-3.5 transition hover:border-white hover:bg-black hover:text-white active:scale-95">
						Check Out
					</button>
				</div>
			</div>
		</>
	)
}
