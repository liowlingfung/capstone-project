import React from 'react'
import { Link } from 'react-router'

function SpecialCard({image, title, price, description}) {
  return (
    <>
        <article className='special-card'>
            <div className='image-wrapper'>
                <img src={image} alt={title} className='card-image'/>
            </div>
            <div className='card-content'>
                <div className='card-header'>
                    <h3>{title}</h3>
                    <span className='price'>${price.toFixed(2)}</span>
                </div>
                <p className='description'>{description}</p>
                <Link to="/Ordering" className='order-link'>
                    Order a delivery
                    <span className='delivery-icon'>🛵</span>
                </Link>
            </div>
        </article>
    </>
  )
}

export default SpecialCard