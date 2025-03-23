interface IProductReviews {
	rating: number
	comment: string
	date: Date
	reviewerName: string
	reviewerEmail: string
}

export interface IProduct {
	id: number
	title: string
	description: string
	category: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	tags: string[]
	brand: string
	weight: number
	dimensions: {
		width: number
		height: number
		depth: number
	}
	availabilityStatus: string
	reviews: IProductReviews[]
	returnPolicy: string
	meta: {
		createdAt: Date
		updatedAt: Date
		barcode: string
		qrCode: string
	}
	images: string[]
	thumbnail: string
}

export interface IProducts {
	products: IProduct[]
	filteredProducts: IProduct[]
	status: 'idle' | 'succeed' | 'pending' | 'failed'
	limit: 8 | 16 | 24
	currentPage: number
	sortBy:
		| 'rating_descending'
		| 'rating_ascending'
		| 'price_descending'
		| 'price_ascending'
}

export interface IPage {
	currentPage: string
}
