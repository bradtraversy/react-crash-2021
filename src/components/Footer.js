import React from 'react'
import { Link } from 'react-router-dom'
import Sun from './Sun'

const Footer = () => {
  return (
    <footer>
      <p>blind0ne &copy; 2022</p>
      <Link to='/about'>About</Link>
      <Sun/>
    </footer>
  )
}

export default Footer
