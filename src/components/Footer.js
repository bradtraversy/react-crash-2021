import React from 'react'
import { Link } from 'react-router-dom'
import Sun from './Sun'
import Rplanet from './Rplanet'
import Bplanet from './Bplanet'
import Stars from './Stars'

const Footer = () => {
  return (
    <footer>
      <p>blind0ne &copy; 2022</p>
      <Link to='/about'>About</Link>
      <Sun/>
      <Rplanet/>
      <Bplanet/>
      <Stars/>
    </footer>
  )
}

export default Footer
