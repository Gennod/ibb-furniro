import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProducts } from '../../types'

export const fetchProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const response = await axios.get(`https://dummyjson.com/products?limit=194`)

		return response.data
	}
)

const applyFiltersAndSorting = (state: IProducts) => {
	const filtered =
		state.tagFilter.length > 0
			? state.products.filter(product =>
					product.tags?.some(tag => state.tagFilter.includes(tag))
				)
			: [...state.products]

	const sorted = [...filtered]

	switch (state.sortBy) {
		case 'rating_ascending':
			sorted.sort((a, b) => a.rating - b.rating)
			break
		case 'rating_descending':
			sorted.sort((a, b) => b.rating - a.rating)
			break
		case 'price_ascending':
			sorted.sort((a, b) => a.price - b.price)
			break
		case 'price_descending':
			sorted.sort((a, b) => b.price - a.price)
			break
		default:
			sorted.sort((a, b) => b.rating - a.rating)
	}

	state.filteredProducts = sorted
}

const initialState: IProducts = {
	products: [],
	filteredProducts: [],
	status: 'idle',
	limit: 8,
	sortBy: 'rating_descending',
	currentPage: 1,
	tagFilter: []
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload
			state.currentPage = 1
			applyFiltersAndSorting(state)
		},

		filterByTag: (state, action) => {
			if (!state.tagFilter.includes(action.payload)) {
				state.tagFilter.push(action.payload)
				state.currentPage = 1
				applyFiltersAndSorting(state)
			}
		},

		deleteTag: (state, action) => {
			state.tagFilter = state.tagFilter.filter(tag => tag !== action.payload)
			state.currentPage = 1
			applyFiltersAndSorting(state)
		},

		filterProducts: (state, action) => {
			state.sortBy = action.payload
			state.currentPage = 1
			applyFiltersAndSorting(state)
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
				applyFiltersAndSorting(state)
			})
			.addCase(fetchProducts.pending, state => {
				state.status = 'pending'
			})
			.addCase(fetchProducts.rejected, state => {
				state.status = 'failed'
			})
	}
})

export const {
	setLimit,
	filterProducts,
	setCurrentPage,
	filterByTag,
	deleteTag
} = productSlice.actions
export const productReducer = productSlice.reducer
