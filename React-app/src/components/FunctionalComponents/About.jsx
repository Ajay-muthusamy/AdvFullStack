import React from 'react'
import UseRefTask from './UseRefTask'
const About = (props) => {
  return (
    <div>
      <h1>Hello About Page {props.name}</h1>
      <UseRefTask />
    </div>
  )
}
export default About
