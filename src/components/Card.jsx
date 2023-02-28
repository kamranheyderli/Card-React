
import React from 'react'


const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.img} alt="product" />
        <p>{props.tittle}</p>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <span>$</span>
        
    </div>
  )
}

export default Card
