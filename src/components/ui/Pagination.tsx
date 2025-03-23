import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCurrentPage } from '../../store/reducers/products'

const ProductsPagination = () => {
	const dispatch = useAppDispatch()
	const { filteredProducts, limit, currentPage } = useAppSelector(
		state => state.products
	)

	const totalPages = Math.ceil(filteredProducts.length / limit)

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		dispatch(setCurrentPage(page))
	}

	return (
		<Stack
			spacing={2}
			alignItems="center"
			sx={{ marginTop: 4 }}
		>
			<Pagination
				count={totalPages}
				page={currentPage}
				onChange={handlePageChange}
				color="primary"
				sx={{
					'.MuiButtonBase-root.Mui-selected': {
						backgroundColor: '#b88e2f'
					}
				}}
				shape="rounded"
				size="large"
			/>
		</Stack>
	)
}

export default ProductsPagination
