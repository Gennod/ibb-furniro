import { Link } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Navigation } from './components/Navigation'

const Header = () => {
	return (
		<header className="flex justify-between gap-12 px-14 py-8">
			<Link
				to="/"
				className="flex items-center"
			>
				<img
					src="/icon.svg"
					alt="Furniro"
				/>
				<p className="ml-1.5 text-2xl font-bold">Furniro</p>
			</Link>
			<Navigation />
			<Menu />
		</header>
	)
}
export default Header
