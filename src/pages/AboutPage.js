import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card><div className="about">
        <h1>About This Project</h1>
        <p>This is a React app</p>
        <p>V: 1.0</p>
        <Link to="/">Home</Link>
    </div></Card>
  )
}

export default AboutPage