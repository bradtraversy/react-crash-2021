import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Details = ({ task }) => {
  const location = useLocation()
  const description = location.state

  return (
    <div>
      <p>
        - {description}
      </p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Details
