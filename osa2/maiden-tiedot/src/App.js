import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Results from './components/Results'
import Filter from './components/Filter'
import { constructDefaultWeather, processOpenWeatherMapResponse } from './components/Weather'

const App = () => {
  const OWM_APPID = 'df16e5620b3493fe4eddd7d1c7af8d43'

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(-1)
  const [weather, setWeather] = useState({
    wind: 'unknown',
    type: 'unknown',
    temp: 'unknown',
    humd: 'unknown',
  })

  // Poll country data when app fist loads
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => setCountries(response.data))
  }, [])

  // Poll/clear weather data when selection changes
  useEffect(() => {
    if (selected === -1) {
      setWeather(constructDefaultWeather())
    } else {
      const country = countries[selected]
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${OWM_APPID}`)
        .then(processOpenWeatherMapResponse(setWeather))
    }
  }, [selected])

  return (
    <div>
      find countries <Filter
        countries={countries}
        filter={filter}
        setFilter={setFilter}
        selected={selected}
        setSelected={setSelected}
      />
      <Results
        countries={countries}
        selected={selected}
        setSelected={setSelected}
        filter={filter}
        setFilter={setFilter}
        weather={weather}
      />
    </div>
  )
}

export default App
