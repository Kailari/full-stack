import React from 'react'

export const byName = (filter) => (country) => {
  return country.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
}

const Filter = ({ countries, selected, filter, setFilter, setSelected }) => {

  const handleChange = (event) => {
    const newFilter = event.target.value

    const filtered = countries.filter(byName(newFilter))
    if (filtered.length === 1) {
      setSelected(countries.indexOf(filtered[0]))
    } else if (selected !== -1) {
      setSelected(-1)
    }

    setFilter(event.target.value)
  }

  return (
    <input value={filter} onChange={handleChange} />
  )
}

export default Filter
