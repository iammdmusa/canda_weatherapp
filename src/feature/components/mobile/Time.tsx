const TimeWidgets = () => {
	const getCurrnetMoment = new Date()
	return (
		<>
			<div className='mt-2 flex flex-col items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-8 w-8 text-white'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
				</svg>
				<p className='mt-3 text-6xl font-extralight text-white'>{`${getCurrnetMoment.getHours()}: ${getCurrnetMoment.getMinutes()}`}</p>
				<p className='mt-1 text-lg font-light text-white'>
					{getCurrnetMoment.toDateString()}
				</p>
			</div>
		</>
	)
}

export default TimeWidgets
