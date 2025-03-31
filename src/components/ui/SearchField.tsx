import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
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
		<Autocomplete
			clearOnEscape
			clearOnBlur
			blurOnSelect
			id="search-field"
			options={productOptions}
			getOptionLabel={(option: ProductOption) => option.title}
			onChange={handleProductSelect}
			sx={{
				width: '350px',
				padding: '5px',
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
					label="Search"
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
	)
}
