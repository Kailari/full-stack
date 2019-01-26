import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const AnecdoteDisplay = ({ anecdotes, points, selected }) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>
        This anecdote has {points[selected]} votes
      </p>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomNumberInRange = (max) => Math.floor(Math.random() * max)
  const getRandomAnecdoteIndex = () => randomNumberInRange(anecdotes.length)

  const handleNewAnecdote = () => setSelected(getRandomAnecdoteIndex())
  const handleVote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <AnecdoteDisplay anecdotes={anecdotes} selected={selected} points={points} />
        <Button text='New anecdote' handleClick={handleNewAnecdote} />
        <Button text='Vote!' handleClick={handleVote} />
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <AnecdoteDisplay
          anecdotes={anecdotes}
          points={points}
          selected={points.indexOf(Math.max(...points))} />
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Do not communicate by sharing memory; instead, share memory by communicating.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
