import { icons } from '../data/header.data'

export const Menu = () => {
	return (
		<ul className="flex items-center gap-12">
			{icons.map(icon => (
				<MenuItem
					key={icon.id}
					src={icon.iconSrc}
					alt={icon.iconAlt}
				/>
			))}
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
