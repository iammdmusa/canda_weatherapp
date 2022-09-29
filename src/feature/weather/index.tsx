import axios from 'axios'
import { API_KEY, ForcastUlr, urlByCity } from 'config/config'
import MobileScreen from 'feature/components/mobile/screen'
import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { IWeatherData, IWeatherSummary } from 'types'
const Weather = () => {
	const [data, setData] = useState<IWeatherSummary>()
	const [dataFull, setDataFull] = useState<IWeatherData>()
	const [latitude, setLatitude] = useState<number>(0)
	const [longitude, setLongitude] = useState<number>(0)
	const [currentCity, setCurrentCity] = useState('Berlin')
	const debounceFn = useCallback(
		debounce(city => {
			setCurrentCity(city)
		}, 1000),
		[]
	)

	const currentcityCallback = (city: string) => {
		debounceFn(city)
	}

	useEffect(() => {
		if ('geolocation' in navigator) {
			const fetchData = async () => {
				navigator.geolocation.getCurrentPosition(function (position) {
					setLatitude(position.coords.latitude)
					setLongitude(position.coords.longitude)
				})

				if (longitude > 0 && latitude > 0) {
					await axios
						.get(
							`${urlByCity}/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`
						)
						.then(result => {
							setData(result.data)
						})

					await axios
						.get(
							`${ForcastUlr}?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
						)
						.then(resultFull => {
							setDataFull(resultFull.data)
						})
				}
			}
			fetchData()
		} else {
			const fetchData = async () => {
				await axios
					.get(`${urlByCity}?q=${currentCity}&units=metric&APPID=${API_KEY}`)
					.then(async result => {
						setData(result.data)
						const getLatLong = result.data && result.data.coord
						getLatLong &&
							(await axios
								.get(
									`${ForcastUlr}?lat=${getLatLong.lat}&lon=${getLatLong.lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
								)
								.then(result => {
									setDataFull(result.data)
								}))
					})
			}
			fetchData()
		}
	}, [latitude, longitude])

	useEffect(() => {
		if (currentCity) {
			const fetchData = async () => {
				await axios
					.get(`${urlByCity}?q=${currentCity}&units=metric&APPID=${API_KEY}`)
					.then(async result => {
						setData(result.data)
						const getLatLong = result.data && result.data.coord
						getLatLong &&
							(await axios
								.get(
									`${ForcastUlr}?lat=${getLatLong.lat}&lon=${getLatLong.lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
								)
								.then(result => {
									setDataFull(result.data)
								}))
					})
			}
			fetchData()
		}
	}, [currentCity])

	return (
		<>
			<MobileScreen
				dataSummary={data}
				dataFull={dataFull}
				callback={currentcityCallback}
			/>
		</>
	)
}

export default Weather
