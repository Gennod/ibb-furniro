import { NavLink } from 'react-router-dom'

import { links } from '../data/constants'

export const Navigation = () => {
	return (
		<ul className="flex items-center gap-12 font-medium">
			{links.map(link => (
				<NavItem
					key={link.id}
					href={link.href}
					title={link.title}
				/>
			))}
		</ul>
	)
}

interface NavItemProps {
	href: string
	title: string
}

export const NavItem: React.FC<NavItemProps> = ({ href, title }) => {
	return (
		<>
			<li>
				<NavLink
					to={href}
					className={({ isActive }) =>
						isActive ? 'text-(--color-primary)' : 'text-black'
					}
				>
					{title}
				</NavLink>
			</li>
		</>
	)
}
