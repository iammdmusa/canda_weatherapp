import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_KEY } from 'config/config'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const fetchData = async (lat: number, log: number) => {
	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`
		)
		.then(response => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const weatherData = response.data
			return weatherData
		})
}

const getWeatherByLatLong = (lat: number, log: number) =>
	useQuery(['weather'], async () => fetchData(lat, log), {
		enabled: !isNaN(lat) && !isNaN(log)
	})

export default getWeatherByLatLong
