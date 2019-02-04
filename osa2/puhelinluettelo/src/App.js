import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const notify = (title, text, type) => {
    setNotification({ title, text, type })
    setTimeout(() => { setNotification(null) }, 5000)
  }

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

        notify('Toiminto onnistui', `Lisättiin "${returnedPerson.name}".`, 'success')
      })
      .catch(error => {
        notify('Virhe!', 'Henkilön lisäys epäonnistui!', 'failure')
      })
    }
    
    const updatePerson = (updatedPerson) => {
      personsService
      .update(updatedPerson.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : returnedPerson))
        
        notify('Toiminto onnistui', `Tietojen päivitys onnistui.`, 'success')
      })
      .catch(error => {
        notify('Virhe!', `Numeron lisäys henkilölle "${updatedPerson.name}" epäonnistui.`, 'failure')
      })
    }
    
    const removePerson = (name, id) => event => {
      if (window.confirm(`Poistetaanko "${name}"?`)) {
        personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          notify('Toiminto onnistui', `Poistettiin ”${name}" onnistuneesti.`, 'success')
        })
        .catch(() => {
          notify('Virhe!', `Henkilöä "${name}" ei voitu poistaa!`, 'failure')
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleClickAdd = event => {
    event.preventDefault()
    if (newName === '') {
      notify('Virhe!', 'Nimi ei voi olla tyhjä!', 'failure')
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
      <Notification message={notification} />
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
