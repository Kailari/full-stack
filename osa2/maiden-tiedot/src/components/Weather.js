import React from 'react'

export const constructDefaultWeather = () => {
  var obj = {
    wind: 'unknown',
    type: 'unknown',
    temp: 'unknown',
    humd: 'unknown',
  }

  return obj
}

export const processOpenWeatherMapResponse = (setWeather) => (response) => {
  setWeather({
    wind: response.data.wind ? response.data.wind : "unknown",
    type: response.data.weather ? response.data.weather[0].description : "unknown",
    temp: response.data.main.temp ? response.data.main.temp : "unknown",
    humd: response.data.main.humidity ? response.data.main.humidity : "unknown",
  })
}

const Weather = ({ weather }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Temp:</td>
          <td>{(Number(weather.temp) - 273.15).toFixed(2)}°C</td>
        </tr>
        <tr>
          <td>Humidity:</td>
          <td>{Number(weather.humd).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{weather.type}</td>
        </tr>
        <tr>
          <td>Wind:</td>
          <td>{weather.wind.speed} m/s, towards {weather.wind.deg}°</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Weather
