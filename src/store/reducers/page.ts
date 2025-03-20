import { createSlice } from '@reduxjs/toolkit'

import { IPage } from '../../types'

const initialState: IPage = {
	currentPage: ''
}

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		}
	}
})

export const pageReducer = pageSlice.reducer
export const { setCurrentPage } = pageSlice.actions
