import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={`notification ${message.type}`}>
      <h2>{message.title}</h2>
      <p>{message.text}</p>
    </div>
  )
}

export default Notification
