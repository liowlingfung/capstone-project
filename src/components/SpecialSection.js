import React from 'react'
import SpecialCard from './SpecialCard';
import { Link } from 'react-router';

function SpecialSection({specialsData}) {
  return (
    <>
        <section className='specials'>
            <h1 className='specials specials-header'>This week specials!</h1>
            <button>
              <Link
              to={'/Ordering'}
              style={{textDecoration:"none", padding:"0"}}>
                Online Menu
              </Link>
            </button>
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