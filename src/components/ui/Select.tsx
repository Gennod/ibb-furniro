import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

import { useAppDispatch } from '../../store/hooks'
import { filterProducts, setLimit } from '../../store/reducers/products'

interface BasicSelectProps {
	type: string
}

const BasicSelect: React.FC<BasicSelectProps> = ({ type }) => {
	const [showCount, setShowCount] = React.useState('8')
	const [ratingType, setRatingType] = React.useState('rating_descending')
	const dispatch = useAppDispatch()

	const handleShowChange = (event: SelectChangeEvent) => {
		setShowCount(event.target.value as string)
	}

	React.useEffect(() => {
		dispatch(setLimit(+showCount))
	}, [showCount, dispatch])

	const handleRangingChange = (event: SelectChangeEvent) => {
		setRatingType(event.target.value as string)
	}

	React.useEffect(() => {
		dispatch(filterProducts(ratingType))
	}, [ratingType, dispatch])

	if (type === 'SHOW') {
		return (
			<Box
				sx={{
					minWidth: 120
				}}
			>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Amount</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={showCount}
						label="Amount"
						onChange={handleShowChange}
					>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={16}>16</MenuItem>
						<MenuItem value={24}>24</MenuItem>
					</Select>
				</FormControl>
			</Box>
		)
	}
	if (type === 'SORT') {
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
}
export default BasicSelect
