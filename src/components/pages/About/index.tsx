import { MyBreadcrumbs } from '../../ui/breadcrumbs'

import { AboutDesign } from './components/AboutDesign'
import { TechStack } from './components/TechStack'

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
					<TechStack />
					<AboutDesign />
				</div>
			</div>
		</div>
	)
}

export default About
