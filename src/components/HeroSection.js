import React from 'react'

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
          <button>Reserve a Table</button>
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