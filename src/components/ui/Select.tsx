import * as React from 'react'

import { ShowSelect } from './SelectComponents/ShowSelect'
import { SortSelect } from './SelectComponents/SortSelect'

interface BasicSelectProps {
	type: string
}

const selects: Record<string, React.JSX.Element> = {
	SHOW: <ShowSelect />,
	SORT: <SortSelect />
}

const BasicSelect: React.FC<BasicSelectProps> = ({ type }) => {
	return selects[type]
}
export default BasicSelect
