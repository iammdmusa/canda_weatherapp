import { useRef, useState } from 'react'
import { BiDotsVertical } from 'react-icons/bi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { WiDirectionLeft } from 'react-icons/wi'
import { IWeatherData, IWeatherSummary } from 'types'
import BatryAndSingnal from './batry'
import Notich from './notch'
import TimeWidgets from './Time'
import Wallpaper from './wallpaper'
import WeatherDetails from './weather-details'
import WeatherApps from './weatherApp'

interface APpProps {
	dataSummary: IWeatherSummary
	dataFull: IWeatherData
	callback: (city: string) => void
}

const MobileScreen = ({ dataSummary, callback, dataFull }: APpProps) => {
	const cityRef = useRef()
	const [isOpen, setIsOpen] = useState<boolean>(true)
	const [isFull, setIsFull] = useState<boolean>(false)
	const onHandleCallback = (): void => {
		setIsFull(!isFull)
	}

	const onHandleOpen = (): void => {
		setIsOpen(!isOpen)
	}

	const onHandleSubmit = () => {
		cityRef.current.value && callback(cityRef.current.value)
		setIsOpen(false)
	}

	const handleInputWithDebounce = e => {
		callback(e.target.value)
	}

	return (
		<div className='grid min-h-screen place-items-center bg-purple-50'>
			{isFull ? (
				<>
					<div className='relative mx-auto h-[712px] w-[350px] overflow-hidden rounded-[60px] border-[14px] border-black bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl ring ring-purple-400'>
						<Notich />
						<div className='relative w-full'>
							<BatryAndSingnal />
							<div className='relative mb-4 flex justify-between'>
								<WiDirectionLeft
									size={32}
									onClick={onHandleCallback}
									className='cursor-pointer'
								/>

								<BiDotsVertical
									size={32}
									onClick={onHandleOpen}
									className='cursor-pointer'
								/>
							</div>
							{isOpen ? (
								<>
									<div className='relative mb-4 flex px-4'>
										<input
											ref={cityRef}
											type='text'
											onChange={handleInputWithDebounce}
											id='city'
											className='block w-full border-0 border-b border-gray-300 bg-transparent text-white outline-none ring-0 placeholder:text-white focus:border-0 focus:outline-none focus:ring-0'
											placeholder='Type City...'
										/>
										<FaLongArrowAltRight
											size={24}
											onClick={onHandleSubmit}
											className='cursor-pointer'
										/>
									</div>
								</>
							) : undefined}
							<WeatherDetails data={dataFull} dataSummary={dataSummary} />
						</div>
					</div>
				</>
			) : (
				<>
					<div className='relative mx-auto h-[712px] w-[350px] overflow-hidden rounded-[60px] border-[14px] border-black bg-black shadow-xl ring ring-purple-400'>
						<Wallpaper />
						<Notich />
						<div className='relative'>
							<BatryAndSingnal />
							<TimeWidgets />
							<WeatherApps data={dataSummary} callback={onHandleCallback} />
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default MobileScreen
