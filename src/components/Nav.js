import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <img src={require("../assets/icons_assets/Logo.png")}/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/Booking">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav