import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import WeatherInfo from "./WeatherInfo";
import '../styles/Weather.css'
import apiInfo from '../API/source'
import CitiesWeather from "./CitiesWeather";
function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [visible, setVisible] = useState(false)
    const apiKey = '6a2b85c4def24d1c19f2d7120ce36ca0'
    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = apiInfo.getInfo(loc, apiKey)
        const res = await axios.get(url);
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
            country:res.data.sys.country
        })
        setVisible(true)
        setCity(res.data.name)

    }

    //Converting K to C
    let k = weather.temp;
    let C = k - 273.15


    const Weath = () => {
        return <WeatherInfo visible={visible} country={weather.country} city={weather.city} humidity={weather.humidity} press={weather.press} descp={weather.descp} temp={C} setVisible={setVisible}/>
    }
     const location = ['London', 'Baku', 'Moscow', 'Paris', 'Brazil', 'Spain', 'Berlin', 'Tokyo', 'Australia']



    return (<div className='container'>
            <div className="weathhead">Weather Info</div>
            <div className="mainweather">
                <div className="weather">
                    <form onSubmit={apiCall} className="form">
                        <input type="text" placeholder="Город" name="loc" autoComplete={'off'}/>
                        <button className="bttn">Искать</button>
                    </form>
                    <div className='info'>*Информация предоставлена сайтом OPENWEATHERMAP</div>
                    {weather && <Weath />}
                </div>
            </div>
            <div style={{fontSize:'35px', fontWeight:600,marginTop:'30px'}}>Погода в некоторых городах мира</div>
            <div className='citiesInfo'>
                {location.map(city =>
                    <CitiesWeather key= {city} loc={city} apiKey={apiKey}/>
                )}
            </div>
        </div>
    )
}

export default Weather