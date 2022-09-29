export interface Iposition {
	lat: number
	log: number
}

export interface IWeather {
	id: number
	main: string
	description: string
	icon: string
}
export interface ICurrent {
	dt: number
	sunrise: number
	sunset: number
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number
	wind_deg: number
	weather: IWeather[]
}

export interface IFeelsLiks {
	day: number
	night: number
	eve: number
	morn: number
}

export interface ITemp {
	day: number
	min: number
	max: number
	night: number
	eve: number
	morn: number
}
export interface IDaily {
	dt: number
	sunrise: number
	sunset: number
	moonrise: number
	moonset: number
	moon_phase: number
	temp: ITemp
	feels_like: IFeelsLiks
	pressure: number
	humidity: number
	dew_point: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: IWeather[]
	clouds: number
	pop: number
	rain: number
	uvi: number
}

export interface IHourly {
	dt: number
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: IWeather[]
	pop: number
	rain: {
		'1h': number
	}
}
export interface IWeatherData {
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
	current: ICurrent
	hourly: IHourly[]
	daily: IDaily[]
}

export interface IWeatherSummary {
	coord: {
		lon: number
		lat: number
	}
	weather: IWeather[]
	base: string
	main: {
		temp: number
		feels_like: number
		temp_min: number
		temp_max: number
		pressure: number
		humidity: number
	}
	visibility: number
	wind: {
		speed: number
		deg: number
	}
	clouds: {
		all: number
	}
	dt: number
	sys: {
		type: number
		id: number
		country: string
		sunrise: number
		sunset: number
	}
	timezone: number
	id: number
	name: string
	cod: number
}
