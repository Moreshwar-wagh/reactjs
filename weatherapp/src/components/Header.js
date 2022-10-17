import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <ul className="navbar">
      <li className="nav-item">
        Weather
        <div class="ping"></div>
      </li>
    </ul>
  )
}

export default Header