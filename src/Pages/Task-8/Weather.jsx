import axios from 'axios';
import React, { useState } from 'react'
import sun from '../../assets/Images/sun.png'
import moon from '../../assets/Images/moonNight.png'
import cloudySun from '../../assets/Images/cloudySunny.png'
import cloudyMoon from '../../assets/Images/cloudyMoon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../../assets/css/style.css'

const Weather = () => {
    const [city, setCity] = useState(null);
    const [cityErr, setCityErr] = useState(false);
    const [weatherData, setWeatherData] = useState();

    const onCallApi = async () => {
        if (!city) {
            setCityErr('City is required');
            return;
        }

        try {

            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=6c3870d24683401ebec113131252101&q=${city}`)
            console.log(response);
            if (response.status === 200) {
                setWeatherData(response.data)
            }
        } catch (error) {
            console.log(error);
        }



    }

    return (
        <div className='container'>

            <div className="row p-3 py-5 ">
                <div className="col-md-7 bg-img shadow-lg rounded position-relative">
                    <div className="position-absolute top-0 start-0 opacity-50" />
                    <div className="position-absolute top-0 end-0 m-3 bg-opacity-75 text-white">
                        <i className="bi bi-geo-alt-fill" />
                        <div className='float-end text-white top-0'>

                            {
                                weatherData && <>
                                    <p className='mb-0 fw-bold'>
                                        Current Location
                                    </p>

                                    <h4 className='mt-0'>
                                        {weatherData?.location?.name}, {weatherData?.location?.region}, {weatherData?.location?.country}
                                    </h4></>
                            }

                        </div>
                    </div>
                    <div className="text-center">
                        <div className='position-absolute top-50'>
                            <h1 className="mb-4 text-white">The Only Weather Forecast You Need</h1>
                            <div className="input-group mx-auto w-50">
                                <input type="text" value={city} className="form-control" onChange={(e) => setCity(e.target.value)} placeholder="Enter location" />
                                <button className="btn btn-primary " onClick={onCallApi}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-5 p-3 shadow-lg rounded text-dark">
                    <h2 className="fw-bold mb-3">Today</h2>
                    <div className="row align-items-center mb-4">
                        <div className="col-md-12">
                            <div className="card shadow-sm p-3">
                                <div className="card-body d-flex">
                                    <div>
                                        <h1 className='display-3 fw-bold'>{weatherData?.current?.temp_c}</h1>
                                        <p className="fs-4 mb-0">
                                            {weatherData?.current.is_day === 1 && weatherData?.current?.cloud === 0 ? 'sun' :
                                                weatherData?.current.is_day === 0 && weatherData?.current?.cloud === 0 ? 'moon' :
                                                    weatherData?.current.is_day === 1 && weatherData?.current?.cloud !== 0 ? 'cloudySun' :
                                                        weatherData?.current.is_day === 0 && weatherData?.current?.cloud !== 0 ? 'cloudyMoon' : ''}

                                            <img src={weatherData?.current.is_day === 1 && weatherData?.current?.cloud === 0 ? sun :
                                                weatherData?.current.is_day === 0 && weatherData?.current?.cloud === 0 ? moon :
                                                    weatherData?.current.is_day === 1 && weatherData?.current?.cloud !== 0 ? cloudySun :
                                                        weatherData?.current.is_day === 0 && weatherData?.current?.cloud !== 0 ? cloudyMoon : ''
                                            } className='img-fluid ms-2' style={{ width: "50px" }} />
                                        </p>
                                    </div>
                                    <div className="vr mx-4" />
                                    <div>
                                        <ul className="list-unstyled">
                                            <li>Humidity : <span className='ms-1'> {weatherData?.current?.humidity}</span></li>
                                            <li>UV Index : <span className='ms-1'> {weatherData?.current?.uv}</span></li>
                                            <li>Cloud Cover : <span className='ms-1'>{weatherData?.current?.cloud === 0 ? 'Clear' : 'Cloudy'}</span>
                                            </li>
                                            <li>Visibility :
                                                <span className='ms-1'>{weatherData?.current?.vis_km < 5 ? 'Poor' : 'clear'}</span>
                                            </li>
                                            <li>Visibility (in km) :
                                                <span className='ms-1'>{weatherData?.current?.vis_km}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather