import React from 'react'

const Persons = ({nameFilter, persons}) => {
  const applyFilter = ({name}) =>
    name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())

  const rows = () =>
    persons
      .filter((person) => applyFilter(person))
      .map((person) => <li key={person.name}>{person.name} {person.number}</li>)

  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default Persons
