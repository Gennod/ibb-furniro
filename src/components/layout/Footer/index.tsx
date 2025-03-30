import { Link } from 'react-router-dom'

import { footerData } from './data/constants'

const Footer = () => {
	return (
		<div className="border-t-2 border-neutral-200 px-24 py-12">
			<div className="flex justify-between gap-32 py-12">
				<div className="flex max-w-3xs flex-col gap-12">
					<h2 className="text-2xl font-bold">Furniro.</h2>
					<address className="text-(--color-light-gray)">
						400 University Drive Suite 200 Coral Gables, FL 33134 USA
					</address>
				</div>
				<div className="flex justify-center gap-16">
					{footerData.map(({ heading, links }, idx) => (
						<div key={idx}>
							<h3 className="mb-14 text-(--color-light-gray)">{heading}</h3>
							<ul className="flex flex-col gap-11">
								{links.map(({ id, title, href }) => (
									<li
										key={id}
										className="text-sm font-medium"
									>
										<Link to={href}>{title}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
					<div>
						<h3 className="mb-14 text-(--color-light-gray)">Newsletter</h3>
						<div className="flex gap-3">
							<div className="my-underline relative">
								<input
									className="my-underline outline-0"
									type="text"
									placeholder="Enter Your Email Address"
								/>
							</div>
							<button className="my-underline relative cursor-pointer">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t-2 border-neutral-200 pt-9">
				2025 furino. All rights reverved | Made by Ivan Blednov
			</div>
		</div>
	)
}

export default Footer
