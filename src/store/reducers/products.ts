import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProduct, IProducts } from '../../types'

export const fetchProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const response = await axios.get(`https://dummyjson.com/products?limit=194`)

		return response.data
	}
)
export const fetchProductById = createAsyncThunk(
	'products/getProductById',
	async (productId: string) => {
		const response = await axios.get(
			`https://dummyjson.com/products/${productId}`
		)
		return response.data
	}
)

const applyFiltersAndSorting = (state: IProducts) => {
	const filtered =
		state.tagFilter.length > 0
			? state.products.filter(product => {
					if (!product.tags || product.tags.length === 0) return false

					const productTags = product.tags.map(t => t.toLowerCase())
					const filterTags = state.tagFilter.map(t => t.toLowerCase())

					return filterTags.every(tag => productTags.includes(tag))
				})
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
	cartProducts: [],
	status: 'idle',
	limit: 8,
	sortBy: 'rating_descending',
	currentPage: 1,
	currentProduct: undefined,
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
		addToCart: (
			state,
			action: PayloadAction<{ product: IProduct; quantity: number }>
		) => {
			const { product, quantity } = action.payload
			const existingItem = state.cartProducts.find(
				item => item.product.id === product.id
			)

			if (existingItem) {
				existingItem.quantity += quantity
			} else {
				state.cartProducts.push({ product, quantity })
			}
		},
		deleteFromCart: (state, action: PayloadAction<number>) => {
			const productId = action.payload
			state.cartProducts = state.cartProducts.filter(
				item => item.product.id !== productId
			)
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
			.addCase(fetchProductById.fulfilled, (state, action) => {
				state.currentProduct = action.payload
				state.status = 'succeed'
			})
			.addCase(fetchProductById.pending, state => {
				state.status = 'pending'
			})
			.addCase(fetchProductById.rejected, state => {
				state.status = 'failed'
			})
	}
})

export const {
	setLimit,
	filterProducts,
	setCurrentPage,
	filterByTag,
	deleteTag,
	addToCart,
	deleteFromCart
} = productSlice.actions
export const productReducer = productSlice.reducer
