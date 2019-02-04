import React from 'react'
import CountryDetails from './CountryDetails';

const Result = ({ countries, country, setSelected, setFilter }) => {
  const handleShow = (event) => {
    setFilter(country.name)
    setSelected(countries.indexOf(country))
  }

  return (
    <div>{country.name}<button onClick={handleShow}>show</button></div>
  )
}

const Results = ({ countries, selected, setSelected, filter, setFilter, weather }) => {
  if (filter === '') {
    return (<div>Search countries by name</div>)
  }

  if (selected !== -1) {
    return (
      <CountryDetails
        country={countries[selected]}
        weather={weather}
      />
    )
  }

  const filtered = countries.filter((country) => country.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  if (filtered.length > 10) {
    return (<div>Too many results, please use more specific filter</div>)
  }

  return filtered.map(country =>
    <Result
      key={country.name}
      countries={countries}
      country={country}
      setSelected={setSelected}
      setFilter={setFilter}
    />
  )
}

export default Results
