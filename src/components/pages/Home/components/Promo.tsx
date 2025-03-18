export const Promo = () => {
	return (
		<div className="flex justify-end bg-[url(/promo/bg.jpg)] px-10 pt-32 pb-28">
			<div className="max-w-xl rounded bg-(--color-secondary)">
				<div className="px-10 pt-16 pb-9">
					<div>
						<p className="font-semibold tracking-widest">New Arrival</p>
						<h1 className="text-6xl font-bold text-(--color-primary)">
							Discover Our New Collection
						</h1>
						<p className="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis.
						</p>
					</div>
					<button className="mt-9 cursor-pointer bg-(--color-primary) px-16 py-6 text-white transition active:scale-95">
						BUY NOW
					</button>
				</div>
			</div>
		</div>
	)
}
