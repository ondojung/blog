import axios from 'axios'

export const WeatherApi= async()=>{
    const city = 'Seoul'
    const APIKEY = '3297f34dc15a92481434262618618415'
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=KR&units=metric`)
    return result.data
}
