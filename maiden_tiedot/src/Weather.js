import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {

  const api_key = process.env.REACT_APP_API_KEY
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then(response => {
        setWeatherData(response.data)
      })
  }, [])

  if (weatherData.current) {
    return (
      <>
        <h2>Weather in {capital}</h2>
        <p> <b>Temperature:</b> {weatherData.current.temperature} celcius</p>
        <img src={weatherData.current.weather_icons} width="75" alt="weather icon"/>
        <p> <b>Wind speed:</b> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
      </>
    )
  } else {
    return(
      <></>
    )
  }

}

export default Weather