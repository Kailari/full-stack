import React from 'react'
import ReactDOM from 'react-dom'
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          excercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          excercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          excercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          excercises: 3,
          id: 1,
        },
        {
          name: 'Middlewaret',
          excercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Kurssilistaus</h1>
      {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
