import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProducts } from '../../types'

export const fetchProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const response = await axios.get(`https://dummyjson.com/products?limit=60`)

		return response.data
	}
)

const initialState: IProducts = {
	products: [],
	filteredProducts: [],
	status: 'idle',
	limit: 8,
	sortBy: 'rating_descending',
	currentPage: 1
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload
			state.currentPage = 1
		},
		filterProducts: (state, action) => {
			state.currentPage = 1
			switch (action.payload) {
				case 'rating_descending':
					state.filteredProducts = state.products.sort(
						(a, b) => b.rating - a.rating
					)
					state.sortBy = 'rating_descending'
					break
				case 'rating_ascending':
					state.filteredProducts = state.products.sort(
						(a, b) => a.rating - b.rating
					)
					state.sortBy = 'rating_ascending'
					break
				case 'price_descending':
					state.filteredProducts = state.products.sort(
						(a, b) => b.price - a.price
					)
					state.sortBy = 'price_descending'
					break
				case 'price_ascending':
					state.filteredProducts = state.products.sort(
						(a, b) => a.price - b.price
					)
					state.sortBy = 'price_ascending'
					break
				default:
					state.filteredProducts = state.products.sort(
						(a, b) => b.rating - a.rating
					)
					state.sortBy = 'rating_descending'
			}
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload.products
				state.status = 'succeed'
				switch (state.sortBy) {
					case 'rating_descending':
						state.filteredProducts = state.products.sort(
							(a, b) => b.rating - a.rating
						)
						state.sortBy = 'rating_descending'
						break
					case 'rating_ascending':
						state.filteredProducts = state.products.sort(
							(a, b) => a.rating - b.rating
						)
						state.sortBy = 'rating_ascending'
						break
					case 'price_descending':
						state.filteredProducts = state.products.sort(
							(a, b) => b.price - a.price
						)
						state.sortBy = 'price_descending'
						break
					case 'price_ascending':
						state.filteredProducts = state.products.sort(
							(a, b) => a.price - b.price
						)
						state.sortBy = 'price_ascending'
						break
					default:
						state.filteredProducts = state.products.sort(
							(a, b) => b.rating - a.rating
						)
						state.sortBy = 'rating_descending'
				}
			})
			.addCase(fetchProducts.pending, state => {
				state.status = 'pending'
			})
			.addCase(fetchProducts.rejected, state => {
				state.status = 'failed'
			})
	}
})

export const { setLimit, filterProducts, setCurrentPage } = productSlice.actions
export const productReducer = productSlice.reducer
