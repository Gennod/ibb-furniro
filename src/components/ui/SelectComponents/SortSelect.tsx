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
	const [ratingType, setRatingType] = useState('rating_descending')
	const dispatch = useAppDispatch()

	const handleRangingChange = (event: SelectChangeEvent) => {
		setRatingType(event.target.value as string)
	}

	useEffect(() => {
		dispatch(filterProducts(ratingType))
	}, [ratingType, dispatch])

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
					value={ratingType}
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
