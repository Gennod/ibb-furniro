export const getTagColor = (tag: string) => {
	const tagColors: Record<string, string> = {
		// Beauty & Personal Care
		beauty: 'bg-pink-100 text-pink-800',
		mascara: 'bg-rose-100 text-rose-800',
		eyeshadow: 'bg-purple-100 text-purple-800',
		'face powder': 'bg-green-100 text-green-800',
		lipstick: 'bg-red-100 text-red-800',
		'nail polish': 'bg-blue-100 text-blue-800',
		'body wash': 'bg-indigo-100 text-indigo-800',

		// Fragrances
		fragrances: 'bg-indigo-100 text-indigo-800',
		perfumes: 'bg-violet-100 text-violet-800',

		// Furniture & Home
		furniture: 'bg-amber-100 text-amber-800',
		beds: 'bg-orange-100 text-orange-800',
		sofas: 'bg-yellow-100 text-yellow-800',
		'bedside tables': 'bg-brown-100 text-brown-800',
		'office chairs': 'bg-teal-100 text-teal-800',
		bathroom: 'bg-cyan-100 text-cyan-800',
		'kitchen appliances': 'bg-red-100 text-red-800',
		cooktops: 'bg-orange-200 text-orange-800',
		'cutting boards': 'bg-amber-200 text-amber-800',

		// Kitchen & Cooking
		'kitchen tools': 'bg-yellow-100 text-yellow-800',
		baking: 'bg-amber-100 text-amber-800',

		// Groceries - Food
		fruits: 'bg-green-100 text-green-800',
		meat: 'bg-red-100 text-red-800',
		vegetables: 'bg-lime-100 text-lime-800',
		dairy: 'bg-yellow-100 text-yellow-800',
		seafood: 'bg-blue-100 text-blue-800',

		// Groceries - Other
		'pet supplies': 'bg-blue-100 text-blue-800',
		'cat food': 'bg-indigo-100 text-indigo-800',
		'dog food': 'bg-purple-100 text-purple-800',
		condiments: 'bg-orange-100 text-orange-800',
		desserts: 'bg-pink-100 text-pink-800',
		beverages: 'bg-sky-100 text-sky-800',

		// Electronics
		smartphones: 'bg-blue-100 text-blue-800',
		apple: 'bg-green-100 text-green-800',
		'samsung galaxy': 'bg-blue-200 text-blue-800',

		// Clothing & Fashion
		clothing: 'bg-purple-100 text-purple-800',
		"men's t-shirts": 'bg-blue-100 text-blue-800',
		'fashion accessories': 'bg-pink-100 text-pink-800',
		handbags: 'bg-rose-100 text-rose-800',
		gowns: 'bg-purple-200 text-purple-800',

		// Footwear
		footwear: 'bg-brown-100 text-brown-800',
		'athletic shoes': 'bg-red-100 text-red-800',
		'casual shoes': 'bg-green-100 text-green-800',
		"women's shoes": 'bg-pink-100 text-pink-800',

		// Bags & Luggage
		backpacks: 'bg-green-100 text-green-800',

		// Sports & Outdoors
		'sports equipment': 'bg-green-100 text-green-800',
		basketball: 'bg-orange-100 text-orange-800',
		tennis: 'bg-green-200 text-green-800',
		baseball: 'bg-blue-100 text-blue-800',
		golf: 'bg-emerald-100 text-emerald-800',

		// Vehicles
		motorcycles: 'bg-red-100 text-red-800'
	}

	return tagColors[tag.toLowerCase()] || 'bg-green-100 text-green-800'
}
