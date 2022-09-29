import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_KEY, urlByCity } from 'config/config'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const fetchData = async (city: string) =>
	axios.get(`${urlByCity}?q=${city}&appid=${API_KEY}`).then(response => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const weatherData = response.data
		return weatherData
	})
const useGetWeather = (city: string) =>
	useQuery(['weather'], async () => city && fetchData(city), {
		enabled: !!city
	})

export default useGetWeather
