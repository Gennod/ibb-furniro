import { CircularProgress, ThemeProvider, createTheme } from '@mui/material'
import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { store } from './store'

const Footer = React.lazy(() => import('./components/layout/Footer'))
const Header = React.lazy(() => import('./components/layout/Header'))

const About = React.lazy(() => import('./components/pages/About'))
const Shop = React.lazy(() => import('./components/pages/Shop'))
const Home = React.lazy(() => import('./components/pages/Home'))
const Cart = React.lazy(() => import('./components/pages/Cart'))
const Contact = React.lazy(() => import('./components/pages/Contact'))
const ProductPage = React.lazy(
	() => import('./components/pages/ProductPage/ProductPage')
)

const theme = createTheme({
	palette: {
		primary: {
			main: '#b88e2f'
		},
		secondary: {
			main: '#E0C2FF',
			light: '#F5EBFF',
			contrastText: '#47008F'
		}
	}
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Suspense
						fallback={
							<div className="flex h-screen items-center justify-center">
								<CircularProgress
									size={120}
									thickness={4}
								/>
							</div>
						}
					>
						<Header />
						<Routes>
							<Route
								path="/"
								element={
									<main>
										<Home />
									</main>
								}
							/>
							<Route
								path="/shop"
								element={<Shop />}
							/>
							<Route
								path="/about"
								element={<About />}
							/>
							<Route
								path="/contact"
								element={<Contact />}
							/>
							<Route
								path="/product/:productId"
								element={<ProductPage />}
							/>
							<Route
								path="/cart"
								element={<Cart />}
							/>
						</Routes>
						<Footer />
					</Suspense>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</StrictMode>
)
