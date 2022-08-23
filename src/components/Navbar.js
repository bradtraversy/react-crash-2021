import React from 'react'
import logo from '../imgs/eyes_logo.png'

const Navbar = () => {
  return (
    <>
        <img id='logo' src={logo} alt="EYES LOGO" />
        <nav role="navigation">
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Magic</a>
                <ul class="dropdown">
                  <li><a href="#">Tarot</a></li>
                  <li><a href="#">Astrology</a></li>
                  <li><a href="#">Critics</a></li>
                </ul>
              </li>
              <li><a href="movies/index.html">Movies</a></li>
            </ul>
          </nav>
    </>
  )
}

export default Navbar