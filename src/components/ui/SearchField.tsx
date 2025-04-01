import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { motion } from 'motion/react'
import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'

interface ProductOption {
	title: string
	id: number
}

export default function SearchField({
	handleInputBlur
}: {
	handleInputBlur: () => void
}) {
	const { products } = useAppSelector(state => state.products)
	const navigate = useNavigate()

	const productOptions: ProductOption[] = products.reduce(
		(acc: ProductOption[], product) => {
			if (!acc.some(item => item.title === product.title)) {
				acc.push({ title: product.title, id: product.id })
			}
			return acc
		},
		[]
	)

	const handleProductSelect = (
		event: SyntheticEvent,
		value: ProductOption | null
	) => {
		if (value) {
			navigate(`/product/${value.id}`)
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0, scaleX: 0 }}
			animate={{ opacity: 1, scaleX: 1 }}
			exit={{ opacity: 0, scaleX: 0 }}
			transition={{ duration: 0.3 }}
			style={{
				maxWidth: '400px',
				width: '100%',
				paddingTop: '1px',
				overflow: 'hidden', // Чтобы содержимое не вылезало при анимации
				transformOrigin: 'right'
			}}
		>
			<Autocomplete
				clearOnEscape
				clearOnBlur
				blurOnSelect
				id="search-field"
				options={productOptions}
				getOptionLabel={(option: ProductOption) => option.title}
				onChange={handleProductSelect}
				sx={{
					width: '100%', // Занимает всю ширину родителя
					'& .MuiAutocomplete-inputRoot': {
						padding: '15px !important',
						height: '24px'
					},
					'& .MuiInputLabel-root': {
						top: '-4px'
					},
					'& .MuiInputLabel-root.Mui-focused': {
						top: '0px'
					}
				}}
				renderInput={params => (
					<TextField
						{...params}
						fullWidth
						onBlur={handleInputBlur}
						label=""
						autoFocus
						variant="outlined"
						size="small"
						slotProps={{
							input: {
								...params.InputProps,
								type: 'search'
							}
						}}
					/>
				)}
			/>
		</motion.div>
	)
}
