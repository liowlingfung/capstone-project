import React, { useState } from 'react'

function OrderItems({image, title, price, description}) {
    const [itemCount, setItemCount] = useState(0)

    const OrderCart = () =>{
        alert(`You have ordered ${itemCount} ${title},the total price will be $${(price * itemCount).toFixed(2)}`)
    }
  return (
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
            <div className='counter-container'>
                <button className='counter minus' onClick={() => setItemCount((count) => count > 0 ? count - 1 : 0)}>-</button>
                <p className="counter">{itemCount}</p>
                <button className='counter add' onClick={() => setItemCount((count) => count  + 1)}>+</button>
            </div>
            {
                itemCount > 0 ? (
                <button onClick={OrderCart}>Add to Cart</button>
                ) : (
                <button disabled={true} style={{backgroundColor:'#bb9e0f'}}>Add to Cart</button>
                )
            }
        </div>
    </article>
  )
}

export default OrderItems