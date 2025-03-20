import { configureStore } from '@reduxjs/toolkit'

import { pageReducer } from './reducers/page'
import { productReducer } from './reducers/products'

export const store = configureStore({
	reducer: {
		products: productReducer,
		page: pageReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
