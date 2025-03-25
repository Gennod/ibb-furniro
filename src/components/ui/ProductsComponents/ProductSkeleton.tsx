import { Skeleton } from '@mui/material'

import { useAppSelector } from '../../../store/hooks'

interface ProductSkeletonProps {
	isTitle?: boolean
	fixedLimit?: number
}

export const ProductSkeleton: React.FC<ProductSkeletonProps> = ({
	isTitle,
	fixedLimit
}) => {
	const { limit } = useAppSelector(state => state.products)

	return (
		<div className="pt-14">
			{isTitle && (
				<h2 className="text-center text-4xl font-bold">Our Products</h2>
			)}
			<ul className="relative grid grid-cols-3 gap-8 px-24 py-10">
				{Array.from({ length: fixedLimit || limit }).map((_, index) => (
					<li
						key={index}
						className="flex flex-col rounded bg-(--color-gray)"
					>
						<div className="h-48 w-full">
							<Skeleton
								variant="rectangular"
								width="100%"
								height="100%"
								sx={{ bgcolor: 'grey.500' }}
							/>
						</div>
						<div className="container flex grow flex-col gap-2 px-4 pt-4 pb-8">
							<Skeleton
								variant="text"
								width="80%"
								sx={{ bgcolor: 'grey.500', fontSize: '1.5rem' }}
							/>
							<Skeleton
								variant="text"
								width="100%"
								sx={{ bgcolor: 'grey.500' }}
							/>
							<Skeleton
								variant="text"
								width="40%"
								sx={{ bgcolor: 'grey.500' }}
							/>
							<div className="flex items-center justify-between">
								<Skeleton
									variant="text"
									width="60%"
									sx={{ bgcolor: 'grey.500' }}
								/>
								<Skeleton
									variant="text"
									width="20%"
									sx={{ bgcolor: 'grey.500' }}
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
