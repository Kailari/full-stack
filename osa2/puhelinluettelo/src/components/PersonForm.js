import React from 'react'

const PersonForm = ({ newName, newNameSetter, newNumber, newNumberSetter, persons, setPersons }) => {
  const handleChange = (setter) => (event) =>
    setter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    if (newName === '') {
      alert('nimi ei voi olla tyhjä!')
    } else if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} on jo luettelossa!`)
    } else if (newNumber === '') {
      alert('numero ei voi olla tyhjä!')
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson))
      newNameSetter('')
      newNumberSetter('')
    }
  }

  return (
    <form onSubmit={addPerson}>
      <div>nimi: <input value={newName} onChange={handleChange(newNameSetter)} /></div>
      <div>numero: <input value={newNumber} onChange={handleChange(newNumberSetter)} /></div>
      <div><button type="submit">lisää</button></div>
    </form>
  )
}

export default PersonForm
