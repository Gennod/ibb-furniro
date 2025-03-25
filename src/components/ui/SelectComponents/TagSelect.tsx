import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material'
import { useEffect, useState } from 'react'

import { useAppDispatch } from '../../../store/hooks'
import { filterProducts } from '../../../store/reducers/products'

export const SortSelect = () => {
	const [tag, setTag] = useState('')
	const dispatch = useAppDispatch()

	const handleRangingChange = (event: SelectChangeEvent) => {
		setTag(event.target.value as string)
	}

	useEffect(() => {
		dispatch(filterProducts(tag))
	}, [tag, dispatch])

	return (
		<Box
			sx={{
				minWidth: 120
			}}
		>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Type</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={tag}
					label="Type"
					onChange={handleRangingChange}
				>
					<MenuItem value="price_ascending">Price Ascending</MenuItem>
					<MenuItem value="price_descending">Price Descending</MenuItem>
					<MenuItem value="rating_ascending">Rating Ascending</MenuItem>
					<MenuItem value="rating_descending">Rating Descending</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}
