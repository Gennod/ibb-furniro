import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import Header from './components/layout/Header'
import Home from './components/pages/Home'
import './index.css'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Header />
			<main>
				<Home />
			</main>
		</Provider>
	</StrictMode>
)
