import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>
        {location.pathname === '/details' ? title = 'Description Of Task' : title = 'Task Manager'}
      </h1>
      {location.pathname === '/' && (<Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
      />)}
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
