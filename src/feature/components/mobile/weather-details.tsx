import {
	WiDaySunnyOvercast,
	WiHumidity,
	WiStrongWind,
	WiSunrise,
	WiSunset,
	WiThermometer,
	WiThermometerExterior
} from 'react-icons/wi'
import { IWeatherData, IWeatherSummary } from 'types'
interface WeatherDetailsProps {
	data: IWeatherData
	dataSummary: IWeatherSummary
}
interface IWeather {}
const WeatherDetails = ({ data, dataSummary }: WeatherDetailsProps) => {
	return data ? (
		<>
			<div className='relative'>
				<div className='rounded-3xl bg-white/30 p-4 text-center shadow backdrop-blur-md'>
					<div className='text-4xl'>{dataSummary.name}</div>
					<div className='mb-2'>
						Feels like {Math.round(dataSummary?.main?.feels_like)}℃
					</div>
					<div className='flex justify-center text-xl capitalize'>
						{dataSummary?.weather[0]?.description}
						<WiDaySunnyOvercast size={32} />
					</div>
					<div className='py-2 text-4xl'>
						{Math.round(dataSummary?.main?.temp)}℃
					</div>
					<div className='mb-2 flex'>
						<div className='flex flex-1 text-xl'>
							<WiHumidity size={28} />{' '}
							<span className='font-medium'>
								{Math.round(dataSummary.main?.humidity)}%
							</span>
						</div>
						<div className='flex flex-1'>
							<WiThermometer size={28} className='text-yellow-300' />
							<span className='font-medium'>
								{Math.round(dataSummary.main?.temp_max)}℃
							</span>
						</div>
						<div className='flex flex-1'>
							<WiThermometerExterior size={28} />
							<span className='font-medium'>
								{Math.round(dataSummary.main?.temp_min)}℃
							</span>
						</div>
					</div>
					<div className='mb-2 flex justify-center'>
						<div className='flex flex-1'>
							<WiSunrise size={28} className='text-yellow-200' />
							<span className='font-medium'>{`${new Date(
								data.current.sunrise
							).getHours()} : ${new Date(
								data.current.sunrise
							).getMinutes()}`}</span>
						</div>
						<div className='flex flex-1'>
							<WiSunset size={28} className='text-red-100' />
							<span className='font-medium'>{`${new Date(
								data.current.sunset
							).getHours()} : ${new Date(
								data.current.sunset
							).getMinutes()}`}</span>
						</div>
						<div className='flex flex-1'>
							<WiStrongWind size={28} />
							<span className='font-medium'>{data.current.wind_speed} </span>
						</div>
					</div>
					<div className='flex justify-center px-2'>
						<div className='flex flex-1'>Day</div>
						<div className='flex flex-1'>
							<WiThermometerExterior size={28} className='text-yellow-300' />
						</div>
						<div className='flex flex-1'>
							<WiThermometer size={28} />
						</div>
					</div>
					{data.daily.sort()?.map((item, index: number) => {
						const fullDayArr =
							item.dt && new Date(item.dt * 1000).toDateString().split(' ')
						return (
							<div
								key={index}
								className='mb-2 flex justify-center border-b border-dotted px-2 last:border-b-0'
							>
								<div className='flex flex-1'>
									{`${fullDayArr[2]} ${fullDayArr[0]}`}
								</div>
								<div className='flex flex-1'>{Math.round(item.temp.max)}℃</div>
								<div className='flex flex-1'>{Math.round(item.temp.min)}℃</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	) : undefined
}

export default WeatherDetails
