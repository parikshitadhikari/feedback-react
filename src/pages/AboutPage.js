import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card><div className="about">
        <h1>About This Project</h1>
        <p>This is a React app</p>
        <p>V: 1.0</p>
        <a href="/">Home</a>
    </div></Card>
  )
}

export default AboutPage