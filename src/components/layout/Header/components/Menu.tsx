import { Badge } from '@mui/material'
import { ShoppingCart } from 'lucide-react'

import { useAppSelector } from '../../../../store/hooks'
import { icons } from '../data/constants'

export const Menu = () => {
	const { cartProducts } = useAppSelector(state => state.products)

	return (
		<ul className="flex items-center gap-12">
			{icons.map(icon => (
				<MenuItem
					key={icon.id}
					src={icon.iconSrc}
					alt={icon.iconAlt}
				/>
			))}
			<li>
				<button className="cursor-pointer">
					<Badge
						color="primary"
						badgeContent={cartProducts.length}
					>
						<ShoppingCart />
					</Badge>
				</button>
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
		<li>
			<button className="cursor-pointer">
				<img
					src={src}
					alt={alt}
				/>
			</button>
		</li>
	)
}
