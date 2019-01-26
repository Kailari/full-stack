import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return props.course.parts.map(part => (
    <Part name={part.name} excercises={part.excercises} />
  ))
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.excercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      yhteensä {
        props.course.parts
          .map((part) => part.excercises)
          .reduce((a, b) => a + b, 0)
      } tehtävää
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      { name: 'Reactin perusteet', excercises: 10 },
      { name: 'Tiedonvälitys propseilla', excercises: 7 },
      { name: 'Komponenttien tila', excercises: 14 },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
