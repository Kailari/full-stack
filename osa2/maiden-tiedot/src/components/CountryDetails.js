import React from 'react'
import Weather from './Weather'

const Info = ({ population, capital }) =>
  <table>
    <tbody>
      <tr>
        <td>Population</td>
        <td>{population}</td>
      </tr>
      <tr>
        <td>Capital</td>
        <td>{capital}</td>
      </tr>
    </tbody>
  </table>

const Flag = ({ country, flag }) => <img src={flag} width='20%' alt={`the flag of ${country}`} />

const CountryDetails = ({ country, weather }) => {
  const languageRows = ({ iso639_1, iso639_2, name }) => <li key={`${iso639_1}-${iso639_2}`}>{name}</li>

  return (
    <div>
      <h2>{country.name}</h2>
      <Info population={country.population} capital={country.capital} />

      <h3>Languages:</h3>
      <ul>
        {country.languages.map(languageRows)}
      </ul>

      <Flag flag={country.flag} country={country.name} />

      <h3>Weather in {country.capital}</h3>
      <Weather weather={weather} />
    </div>
  )
}

export default CountryDetails
