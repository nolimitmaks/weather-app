import axios from 'axios'

import {API_WEATHER_KEY} from '../api/api_keys'
import {WEATHER_URL} from '../api/api_keys'



export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${WEATHER_URL}${city},us&appid=${API_WEATHER_KEY}`
    const request = axios.get(url)
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
