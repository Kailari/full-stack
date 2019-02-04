import React from 'react'

const Persons = ({nameFilter, persons, removePerson}) => {
  const applyFilter = ({name}) =>
    name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())

  const rows = () =>
    persons
      .filter((person) => applyFilter(person))
      .map((person) => <li key={person.id}>{person.name} {person.number} <button onClick={removePerson(person.name, person.id)}>Poista</button></li>)

  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default Persons
