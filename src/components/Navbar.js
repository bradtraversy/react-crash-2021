import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav role="navigation">
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Magic</a>
                <ul class="dropdown">
                  <li><a href="#">Tarot</a></li>
                  <li><a href="#">Astrology</a></li>
                </ul>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default Navbar