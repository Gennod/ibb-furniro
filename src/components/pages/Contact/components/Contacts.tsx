import { items } from '../data/contact.data'

export const Contacts = () => {
	return (
		<div className="flex flex-col gap-11">
			{items.map((item, idx) => (
				<div
					key={idx}
					className="flex gap-2"
				>
					{item.icon}
					<div>
						<p className="text-2xl font-medium">{item.heading}</p>
						<address className="text-sm">
							{item.contacts.map((contact, idx) => (
								<p key={idx}>{contact}</p>
							))}
						</address>
					</div>
				</div>
			))}
		</div>
	)
}
