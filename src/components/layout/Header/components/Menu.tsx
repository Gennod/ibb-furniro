import { Badge } from '@mui/material'
import { Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../../../store/hooks'
import SearchField from '../../../ui/SearchField'

export const Menu = () => {
	const { cartProducts, products } = useAppSelector(state => state.products)
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return (
		<ul
			className={`flex max-w-[450px] grow items-center justify-end gap-12 ${isSearchOpen ? '' : ''}`}
		>
			<li
				className={`flex items-center overflow-hidden ${isSearchOpen ? 'grow' : ''}`}
			>
				{isSearchOpen ? (
					<SearchField handleInputBlur={toggleSearch} />
				) : (
					<button
						key="search-button"
						onClick={toggleSearch}
						className="cursor-pointer"
					>
						<Search className="h-6 w-6" />
					</button>
				)}
			</li>
			<li className="flex items-center">
				<button className="cursor-pointer">
					<img
						className="h-6 w-6"
						src="/header/heart.svg"
						alt="heart"
					/>
				</button>
			</li>
			<li className="flex items-center">
				<Link
					to="/cart"
					className="cursor-pointer"
				>
					<Badge
						color="primary"
						badgeContent={cartProducts.length}
					>
						<ShoppingCart />
					</Badge>
				</Link>
			</li>
		</ul>
	)
}
