import { Skeleton } from '@mui/material'

export const ProductSkeleton = () => {
	return (
		<div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 px-4 py-8 sm:flex-row sm:gap-20 sm:px-8 sm:py-12">
			<div className="w-full sm:min-w-80">
				<Skeleton
					variant="rectangular"
					width="100%"
					height={320}
					sx={{ bgcolor: 'grey.300' }}
				/>
			</div>

			<div className="w-full sm:flex-1">
				<Skeleton
					variant="text"
					width="80%"
					height={48}
					sx={{ bgcolor: 'grey.300', fontSize: '2rem' }}
				/>

				<Skeleton
					variant="text"
					width="30%"
					height={32}
					sx={{ bgcolor: 'grey.300', fontSize: '1.5rem', mt: 1 }}
				/>

				<div className="my-4">
					<Skeleton
						variant="rectangular"
						width={120}
						height={24}
						sx={{ bgcolor: 'grey.300' }}
					/>
				</div>

				<div className="mb-5 space-y-2">
					<Skeleton
						variant="text"
						width="100%"
						sx={{ bgcolor: 'grey.300' }}
					/>
					<Skeleton
						variant="text"
						width="95%"
						sx={{ bgcolor: 'grey.300' }}
					/>
					<Skeleton
						variant="text"
						width="90%"
						sx={{ bgcolor: 'grey.300' }}
					/>
					<Skeleton
						variant="text"
						width="85%"
						sx={{ bgcolor: 'grey.300' }}
					/>
				</div>

				<Skeleton
					variant="rectangular"
					width={120}
					height={40}
					sx={{ bgcolor: 'grey.300' }}
				/>
			</div>
		</div>
	)
}
