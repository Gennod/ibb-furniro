import { ThemeProvider, createTheme } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import { ProductPage } from './components/pages/ProductPage/ProductPage'
import Shop from './components/pages/Shop'
import './index.css'
import { store } from './store'

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
					</Routes>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</StrictMode>
)
