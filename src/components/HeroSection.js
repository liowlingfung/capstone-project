import React from 'react'
import { Link } from 'react-router'

function HeroSection() {
  return (
    <section className="hero">
        <div className="heading-text" aria-label='heading-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            {
              `We are a family owned
              Mediterranean restaurant,
              focused on traditional
              recipes served with a modern
              twist`
            }
          </p>
          <button>
            <Link
            to={'/Booking'} 
            style={{textDecoration:"none", padding:"0"}}>
              Reserve a Table
            </Link>
          </button>
        </div>
        <img
          className="hero-img"
          src={require('../assets/icons_assets/restauranfood.jpg')}
          loading='lazy'
        />
      </section>
  )
}

export default HeroSection