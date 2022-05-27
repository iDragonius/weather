import React, {useEffect, useState} from 'react';
import apiInfo from "../API/source";
import axios from "axios";

const CitiesWeather = ({loc, apiKey}) => {

    const [cityWeath, setCityWeath] = useState('')



    useEffect ( async() => {

        const url = apiInfo.getInfo(loc, apiKey)
        const res = await axios.get(url);
        setCityWeath({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
            country:res.data.sys.country
        })

    }, [])

    let k = cityWeath.temp;
    let C = k - 273.15


    return (
        <div className='cityInfo'>
            <div style={{fontWeight:600, borderBottom:'1px solid azure', marginBottom:'5px', fontSize:18}}>{loc}</div>
            <div className="">
                <div className="" style={{paddingBottom:'10px'}}>
                    <span className='span'>Старна</span> : {cityWeath.country}
                </div>
                <div className="" style={{paddingBottom:'10px'}}>
                    <span className='span'>Погода</span>  : {cityWeath.descp}
                </div>
                <div className="" style={{paddingBottom:'10px'}}>
                    <span className='span'>Температура</span> : {C.toFixed(2)} &#8451;
                </div>

            </div>
        </div>

    );
};

export default CitiesWeather;
