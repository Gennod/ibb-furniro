import { Cpu, Palette } from 'lucide-react'

import { MyBreadcrumbs } from '../../ui/breadcrumbs'

const items = [
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
					<p className="mt-5 text-2xl font-semibold">Технологический стек</p>
					<ul className="mt-2">
						{items.map((item, idx) => (
							<li
								key={idx}
								className="flex gap-1"
							>
								<div>{item.icon}</div>
								<p>{item.title}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default About
