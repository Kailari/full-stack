import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data)
      })
  }, [])

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
