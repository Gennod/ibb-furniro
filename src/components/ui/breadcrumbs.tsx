import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCurrentPage } from '../../store/reducers/page'

export const MyBreadcrumbs = () => {
	const { currentPage } = useAppSelector(state => state.page)
	const dispatch = useAppDispatch()
	const location = useLocation()

	useEffect(() => {
		dispatch(setCurrentPage(location.pathname))
	}, [location.pathname, dispatch])

	const currentPageParams: {
		[key: string]: string
		'/shop': string
		'/about': string
		'/contact': string
		'/cart': string
	} = {
		'/shop': 'Shop',
		'/about': 'About',
		'/contact': 'Contact',
		'/cart': 'Cart'
	}

	const breadcrumbs = [
		<Link
			key="1"
			to="/"
		>
			Home
		</Link>,
		<Typography
			key="3"
			sx={{ color: 'text.primary' }}
		>
			{currentPageParams[currentPage]}
		</Typography>
	]

	return (
		<Breadcrumbs
			separator={<ChevronRight />}
			aria-label="breadcrumb"
		>
			{breadcrumbs}
		</Breadcrumbs>
	)
}
