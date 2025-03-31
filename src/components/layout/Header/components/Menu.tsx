import { Badge } from '@mui/material'
import { Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../../../store/hooks'
import SearchField from '../../../ui/SearchField'
import { icons } from '../data/constants'

export const Menu = () => {
	const { cartProducts, products } = useAppSelector(state => state.products)
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return (
		<ul className="flex items-center gap-12">
			{icons.map(icon => (
				<MenuItem
					key={icon.id}
					src={icon.iconSrc}
					alt={icon.iconAlt}
				/>
			))}
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

interface MenuItemProps {
	src: string
	alt: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ src, alt }) => {
	return (
		<li className="flex items-center">
			<button className="cursor-pointer">
				<img
					className="h-6 w-6"
					src={src}
					alt={alt}
				/>
			</button>
		</li>
	)
}
