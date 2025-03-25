import { links } from '../data/about.data'

export const AboutDesign = () => {
	return (
		<>
			<h3 className="mt-5 text-2xl font-semibold">
				Дизайн и сходный код проекта
			</h3>
			<div className="mt-5 flex gap-5">
				{links.map(({ title, href, icon }) => (
					<a
						className="flex gap-2 rounded border px-3 py-1.5 transition hover:scale-105"
						href={href}
						target="_blank"
					>
						{icon}
						{title}
					</a>
				))}
			</div>
		</>
	)
}
