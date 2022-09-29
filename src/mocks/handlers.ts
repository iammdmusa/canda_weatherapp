import { rest } from 'msw'
import weather from './data/weather.json'

const handlers = [
	rest.get(
		'https://api.openweathermap.org/data/2.5/weather/?lat=52.3752485&lon=9.6942213&units=metric&APPID=b50912146dc6f519fbf709214ca209d2',
		(_, response, context) => response(context.json(weather))
	)
]

export default handlers
