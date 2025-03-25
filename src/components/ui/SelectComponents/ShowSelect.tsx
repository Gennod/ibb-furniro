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
import { setLimit } from '../../../store/reducers/products'

export const ShowSelect = () => {
	const [showCount, setShowCount] = useState('8')
	const dispatch = useAppDispatch()

	const handleShowChange = (event: SelectChangeEvent) => {
		setShowCount(event.target.value as string)
	}

	useEffect(() => {
		dispatch(setLimit(+showCount))
	}, [showCount, dispatch])
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
