import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProducts } from '../../types'

export const fetchProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		const response = await axios.get('https://dummyjson.com/products?limit=8')

		return response.data
	}
)

const initialState: IProducts = {
	products: [],
	status: 'idle'
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload.products
				state.status = 'succeed'
			})
			.addCase(fetchProducts.pending, state => {
				state.status = 'pending'
			})
			.addCase(fetchProducts.rejected, state => {
				state.status = 'failed'
			})
	}
})

export const productReducer = productSlice.reducer
