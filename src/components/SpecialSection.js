import React from 'react'
import SpecialCard from './SpecialCard';

function SpecialSection() {
    const specialsData = [
      {
        id: 1,
        image: require('../assets/icons_assets/greek-salad.jpg'),
        title: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuces, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
      },
      {
        id: 2,
        image: require('../assets/icons_assets/bruchetta.png'),
        title: 'Bruschetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
      },
      {
        id: 3,
        image: require('../assets/icons_assets/lemon-dessert.jpg'),
        title: 'Lemon Dessert',
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient is locally sourced and is as authentic as can be imagined.'
      }
    ];
  return (
    <>
        <section className='specials'>
            <h1 className='specials specials-header'>This week specials!</h1>
            <button>Online Menu</button>
        </section>
            <div className='specials-grid'>
                {
                    specialsData.map(special =>(
                        <SpecialCard
                            key={special.id}
                            image={special.image}
                            title={special.title}
                            price={special.price}
                            description={special.description}
                        />
                    ))
                }
            </div>
    </>
  )
}

export default SpecialSection