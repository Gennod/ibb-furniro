import { tech } from '../data/about.data'

export const TechStack = () => {
	return (
		<>
			<h3 className="mt-5 text-2xl font-semibold">Технологический стек</h3>
			<ul className="mt-2">
				{tech.map((item, idx) => (
					<li
						key={idx}
						className="flex gap-1"
					>
						<div>{item.icon}</div>
						<p>{item.title}</p>
					</li>
				))}
			</ul>
		</>
	)
}
