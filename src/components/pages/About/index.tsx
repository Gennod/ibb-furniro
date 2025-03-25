import { Cpu, Figma, Github, Palette } from 'lucide-react'

import { MyBreadcrumbs } from '../../ui/breadcrumbs'

const tech = [
	{
		icon: <Cpu />,
		title: 'React + Vite'
	},
	{
		icon: <Cpu />,
		title: 'Typescript'
	},
	{
		icon: <Cpu />,
		title: 'Redux + RTK'
	},
	{
		icon: <Palette />,
		title: 'Tailwind'
	},
	{
		icon: <Palette />,
		title: 'Lucide react'
	}
]

const links = [
	{
		href: 'https://www.figma.com/community/file/1252561852327562039',
		title: 'Макет Figma',
		icon: <Figma />
	},
	{
		href: 'https://github.com/Gennod/ibb-furniro',
		title: 'Исходный код',
		icon: <Github />
	}
]

const About = () => {
	return (
		<div className="flex items-center justify-center bg-[url(/shop/bg.jpg)]">
			<div className="flex max-w-5xl flex-col items-center py-10">
				<h2 className="mb-2 text-center text-4xl font-semibold">О проекте</h2>
				<MyBreadcrumbs />
				<div className="mt-5 justify-items-center font-serif">
					<div className="font-bold">
						Данный сайт представляет собой демонстрационную версию
						интернет-магазина, созданную в учебных целях для тренировки
						профессиональных навыков в веб-разработке. Сайт не является реальным
						торговым сервисом, и все операции носят тестовый характер.
						<div>
							Информация о товарах получена через{' '}
							<a
								className="font-semibold underline"
								target="_blank"
								href="https://dummyjson.com/docs/products"
							>
								DummyJSON API
							</a>
						</div>
					</div>
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
				</div>
			</div>
		</div>
	)
}

export default About
