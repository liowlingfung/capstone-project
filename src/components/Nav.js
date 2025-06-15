import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <img
          className='logo'
          src={require("../assets/icons_assets/Logo.png")}
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Booking">Reservations</Link>
          </li>
          <li>
            <Link to="/Ordering">Order Online</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav