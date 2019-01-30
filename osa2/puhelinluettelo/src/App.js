import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [nameFilter, setNameFilter] = useState('')

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter filterValue={nameFilter} filterSetter={setNameFilter} />

      <h3>Lisää uusi</h3>
      <PersonForm
        newName={newName}
        newNameSetter={setNewName}
        newNumber={newNumber}
        newNumberSetter={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />

      <h3>Numerot</h3>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App
