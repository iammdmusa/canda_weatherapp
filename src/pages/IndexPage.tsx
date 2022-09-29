import Head from 'components/Head'
import Weather from 'feature/weather'
import { ReactElement } from 'react'

export default function IndexPage(): ReactElement {
	return (
		<>
			<Head title='Weather App' />
			<Weather />
		</>
	)
}
