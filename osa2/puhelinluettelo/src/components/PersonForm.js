import React from 'react'

const PersonForm = ({ newName, newNameSetter, newNumber, newNumberSetter, addPerson }) => {
  const handleChange = (setter) => (event) =>
    setter(event.target.value)

  return (
    <form onSubmit={addPerson}>
      <div>nimi: <input value={newName} onChange={handleChange(newNameSetter)} /></div>
      <div>numero: <input value={newNumber} onChange={handleChange(newNumberSetter)} /></div>
      <div><button type="submit">lisää</button></div>
    </form>
  )
}

export default PersonForm
