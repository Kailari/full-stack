import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return course.parts.map(part => (
    <Part key={part.id} {...part} />
  ))
}

const Part = ({ name, excercises }) => {
  return (
    <p>
      {name} {excercises}
    </p>
  )
}

const Total = ({ course }) => {
  const numberOfExcercises = () => course.parts
    .map((part) => part.excercises)
    .reduce((a, b) => a + b, 0)

  return (
    <p>
      yhteensä {numberOfExcercises()} tehtävää
    </p>
  )
}


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
