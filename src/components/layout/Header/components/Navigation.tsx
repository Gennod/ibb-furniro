import { links } from '../data/header.data'

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
				<a href={href}>{title}</a>
			</li>
		</>
	)
}
