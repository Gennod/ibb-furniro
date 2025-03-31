import { Frown, Trash } from 'lucide-react'
import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import {
	deleteFromCart,
	updateQuantity
} from '../../../store/reducers/products'
import { MyBreadcrumbs } from '../../ui/breadcrumbs'

export const Cart = () => {
	const { cartProducts } = useAppSelector(state => state.products)
	const [inputValues, setInputValues] = useState<{ [key: number]: string }>({})
	const dispatch = useAppDispatch()

	const handleDeleteProduct = (id: number) => {
		dispatch(deleteFromCart(id))
	}
	const handleQuantityChange = (productId: number, value: string) => {
		if (value === '') {
			setInputValues(prev => ({ ...prev, [productId]: value }))
			return
		}

		const numberValue = parseInt(value)

		if (isNaN(numberValue)) return

		const clampedValue = Math.min(20, Math.max(1, numberValue))

		if (numberValue !== clampedValue) {
			setInputValues(prev => ({
				...prev,
				[productId]: clampedValue.toString()
			}))
			dispatch(updateQuantity({ productId, quantity: clampedValue }))
		} else {
			setInputValues(prev => ({ ...prev, [productId]: value }))
		}
	}

	const handleBlur = (productId: number) => {
		const value = inputValues[productId]

		if (value === '' || isNaN(parseInt(value))) {
			const currentQuantity =
				cartProducts.find(p => p.product.id === productId)?.quantity || 1
			setInputValues(prev => {
				const newState = { ...prev }
				delete newState[productId]
				return newState
			})
			dispatch(updateQuantity({ productId, quantity: currentQuantity }))
		} else {
			const quantity = parseInt(value)
			const clampedQuantity = Math.min(20, Math.max(1, quantity))
			dispatch(updateQuantity({ productId, quantity: clampedQuantity }))
		}
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
					{cartProducts.length ? (
						cartProducts.map(({ product, quantity }) => (
							<div
								className="mt-2 grid grid-cols-6 items-center gap-5"
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
								<input
									className="max-w-min rounded border px-3 text-center"
									type="number"
									value={inputValues[product.id] ?? quantity.toString()}
									min={1}
									max={20}
									onChange={e =>
										handleQuantityChange(product.id, e.target.value)
									}
									onBlur={() => handleBlur(product.id)}
								/>
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
										{(quantity * product.price).toFixed(2)}$
									</p>
								</div>
								<button
									onClick={() => handleDeleteProduct(product.id)}
									className="cursor-pointer justify-self-end"
								>
									<Trash color="#b88e2f" />
								</button>
							</div>
						))
					) : (
						<div className="flex h-full items-center justify-center gap-5 text-3xl">
							<p>Your cart is empty</p> <Frown size={30} />
						</div>
					)}
				</div>
				<div className="flex flex-col items-center bg-(--color-secondary) px-16 pt-3.5 pb-20">
					<h2 className="mb-16 text-2xl font-semibold">Cart Totals</h2>
					<div className="mb-10 flex flex-col gap-8">
						<div className="flex items-center justify-between gap-5">
							<p className="text-sm font-medium">Subtotal</p>
							<div className="text-sm font-normal text-(--color-light-gray)">
								{cartProducts
									.reduce(
										(sum, { product, quantity }) =>
											sum + product.price * quantity,
										0
									)
									.toFixed(2)}
								$
							</div>
						</div>
						<div className="flex items-center justify-between gap-5">
							<p className="text-sm font-medium">Total</p>
							<div className="text-xl text-(--color-primary)">
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
								$
							</div>
						</div>
					</div>
					<button className="cursor-pointer rounded-xl border px-5 py-3.5 text-sm transition hover:border-white hover:bg-black hover:text-white active:scale-95">
						Check Out
					</button>
				</div>
			</div>
		</>
	)
}
