import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>{text}</button>

const Feedback = ({ handleGoodFeedback, handleNeutralFeedback, handleBadFeedback }) => {
  return (
    <div>
      <h1>anna palautetta</h1>
      <Button text='hyvä' handleClick={handleGoodFeedback} />
      <Button text='neutraali' handleClick={handleNeutralFeedback} />
      <Button text='huono' handleClick={handleBadFeedback} />
    </div>
  )
}

const Statistic = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <h1>statistiikka</h1>
        <p>yhtään palautetta ei ole vielä annettu</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistiikka</h1>
      <table>
        <tbody>
          <Statistic name='hyvä' value={good} />
          <Statistic name='neutraali' value={neutral} />
          <Statistic name='huono' value={bad} />
          <Statistic name='yhteensä' value={total} />
          <Statistic name='keskiarvo' value={(good + bad * -1) / total} />
          <Statistic name='positiivisia' value={((good / total) * 100) + '%'}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (value, setter) => () => {
    setter(value + 1)
  }

  return (
    <div>
      <Feedback
        handleGoodFeedback={handleFeedback(good, setGood)}
        handleNeutralFeedback={handleFeedback(neutral, setNeutral)}
        handleBadFeedback={handleFeedback(bad, setBad)} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
