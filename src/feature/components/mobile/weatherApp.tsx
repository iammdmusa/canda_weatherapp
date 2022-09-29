import {
	WiDirectionRight,
	WiHumidity,
	WiThermometer,
	WiThermometerExterior
} from 'react-icons/wi'
import { IWeatherSummary } from 'types'
interface WeatherAppsProps {
	callback: () => void
	data: IWeatherSummary
}

const WeatherApps = ({ callback, data }: WeatherAppsProps) => {
	const onHandleCallback = () => {
		callback()
	}
	return data ? (
		<>
			<div className='relative mx-2 mt-4' onClick={onHandleCallback}>
				<div className='absolute inset-x-0 -bottom-4 h-full w-full origin-bottom scale-[0.85] rounded-2xl bg-white/10 backdrop-blur-md'></div>
				<div className='absolute inset-x-0 -bottom-2 h-full w-full origin-bottom scale-95 rounded-3xl bg-white/30 shadow-sm backdrop-blur-md'></div>
				<div className='rounded-3xl bg-white/40 p-4 text-center shadow backdrop-blur-md'>
					<div className='mb-2 text-4xl'>{data.name}</div>
					<div className='mb-2'>
						Flees like {Math.round(data?.main?.feels_like)}℃
					</div>
					<div className='mb-2 text-6xl'>{Math.round(data?.main?.temp)}℃</div>
					<div className='flex'>
						<div className='flex flex-1 text-xl'>
							<WiHumidity size={28} />{' '}
							<span className='font-medium'>
								{Math.round(data.main?.humidity)}%
							</span>
						</div>
						<div className='flex flex-1 text-xl'>
							<WiThermometerExterior size={28} />{' '}
							<span className='font-medium'>
								{Math.round(data.main?.humidity)}℃
							</span>
						</div>
						<div className='flex flex-1 text-xl'>
							<WiThermometer size={28} />{' '}
							<span className='font-medium'>
								{Math.round(data.main?.humidity)}℃
							</span>
						</div>
					</div>
					<div className='flex justify-end'>
						<WiDirectionRight size={28} />
					</div>
				</div>
			</div>
		</>
	) : undefined
}

export default WeatherApps
