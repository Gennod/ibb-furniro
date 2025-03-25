import { MyBreadcrumbs } from '../../ui/breadcrumbs'

import { ContactForm } from './components/ContactForm'
import { Contacts } from './components/Contacts'

const Contact = () => {
	return (
		<div>
			<div className="flex h-80 items-center justify-center bg-[url(/shop/bg.jpg)]">
				<div className="flex max-w-5xl flex-col items-center py-10">
					<h2 className="mb-2 text-center text-4xl font-semibold">Contact</h2>
					<MyBreadcrumbs />
				</div>
			</div>
			<div className="py-24">
				<div className="mb-32">
					<h2 className="text-bold mb-1.5 text-center text-4xl">
						Get In Touch With Us
					</h2>
					<p className="mx-auto max-w-2xl text-center text-sm text-(--color-light-gray)">
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
						Not Hesitate!
					</p>
				</div>
				<div className="mx-auto grid max-w-5xl grid-cols-2">
					<Contacts />
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default Contact
