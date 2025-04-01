import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Minus, Plus } from 'lucide-react'
import * as React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addToCart } from '../../store/reducers/products'

export default function ProductBadge() {
	const [count, setCount] = React.useState(1)
	const { currentProduct } = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	const handleAddToCart = () => {
		if (currentProduct) {
			dispatch(
				addToCart({
					product: currentProduct,
					quantity: count
				})
			)
			setCount(1)
		}
	}

	return (
		<Box
			sx={{
				color: 'black',
				display: 'flex',
				flexDirection: 'column',
				'& > *': {
					marginBottom: 2
				},
				'& .MuiBadge-root': {
					marginRight: 4
				}
			}}
		>
			<div className="flex gap-5">
				<ButtonGroup className="">
					<Button
						sx={{
							backgroundColor: '#b88e2f',
							color: 'white',
							borderColor: 'rgba(0, 0, 0, 0.5)',
							'.MuiButtonBase-root.MuiButtonGroup-firstButton:hover': {
								borderRightColor: 'transparent !important'
							}
						}}
						aria-label="reduce"
						onClick={() => {
							setCount(Math.max(count - 1, 1))
						}}
					>
						<Minus fontSize="small" />
					</Button>
					<div className="flex items-center justify-center border border-r-0 border-black/50 bg-(--color-primary) px-4 text-white">
						{count}
					</div>
					<Button
						sx={{
							backgroundColor: '#b88e2f',
							color: 'white',
							borderColor: 'rgba(0, 0, 0, 0.5)'
						}}
						aria-label="increase"
						onClick={() => {
							setCount(count + 1)
						}}
					>
						<Plus fontSize="small" />
					</Button>
				</ButtonGroup>
				<button
					onClick={handleAddToCart}
					className="cursor-pointer rounded-2xl border px-14 py-4 text-xl transition hover:bg-(--color-primary) hover:text-white active:scale-95"
				>
					Add to cart
				</button>
			</div>
		</Box>
	)
}
