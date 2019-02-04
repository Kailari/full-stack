import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (newPerson) => {
    personsService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewNumber('')
        setNewName('')
      })
      .catch(error => {
        alert('Henkilön lisäys epäonnistui!')
      })
  }

  const updatePerson = (updatedPerson) => {
    personsService
      .update(updatedPerson.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : returnedPerson))
      })
      .catch(error => {
        alert(`Numeron lisäys henkilölle "${updatedPerson.name}" epäonnistui.`)
      })
  }

  const removePerson = (name, id) => event => {
    if (window.confirm(`Poistetaanko "${name}"?`)) {
      personsService
        .remove(id)
        .then(() => {
          console.log(`Poistettiin ”${name}"`)
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(() => {
          alert(`Henkilöä "${name}" ei voitu poistaa!`)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleClickAdd = event => {
    event.preventDefault()
    if (newName === '') {
      alert('nimi ei voi olla tyhjä!')
      return
    }

    const old = persons.find(p => p.name === newName)
    if (old && window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
      updatePerson({ ...old, number: newNumber })
    } else {
      addPerson({ name: newName, number: newNumber })
    }
  }

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
        addPerson={handleClickAdd}
      />

      <h3>Numerot</h3>
      <Persons
        persons={persons}
        nameFilter={nameFilter}
        removePerson={removePerson}
      />
    </div>
  )
}

export default App
