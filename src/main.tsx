import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import './index.css'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
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
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
)
