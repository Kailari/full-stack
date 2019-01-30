import React from 'react'

const handleFilterChange = (filterSetter) => (event) =>
  filterSetter(event.target.value)

const Filter = ({filterValue, filterSetter}) => {
  return (
    <div>
      rajaa näytettäviä: <input value={filterValue} onChange={handleFilterChange(filterSetter)} />
    </div>
  )
}

export default Filter
