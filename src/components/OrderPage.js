import React from 'react'
import SpecialSection from './SpecialSection'
import OrderItems from './OrderItems'

function OrderPage({specialsData}) {
  return (
    <>
    <section className='ordering-menu'>
        <h1 style={{fontSize:'36px', margin:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>Menu</h1>
        <div className='specials-grid'>
            {
                specialsData.map(special =>(
                    <OrderItems
                        key={special.id}
                        image={special.image}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                    />
                ))
            }
        </div>
    </section>
    </>
  )
}

export default OrderPage