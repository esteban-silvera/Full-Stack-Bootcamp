import { useState } from 'react'

import viteLogo from '/vite.svg'


const Header = (props) =>{
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.text} {props.nums}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part text={props.parts[0].name} nums={props.parts[0].exercises} />
      <Part text={props.parts[1].name} nums={props.parts[1].exercises} />
      <Part text={props.parts[2].name} nums={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (    
      <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  )
}

export default App