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
	status: 'idle' | 'succeed' | 'pending' | 'failed'
}

export interface IPage {
	currentPage: string
}
