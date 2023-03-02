import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'


const Card = ({id, key, image, image2, title, price, oldPrice, normalPrice}) => {
  
  console.log(image)
  return (
    <Link to={`/product/${key}`}>
    


    <div className='card'>
        <div className="image">
            <span>test</span>
            <img src={image} alt={title} className="mainImg"/>
            <img src={image2} alt={title} className="secondImg"/>
            
        </div>

        <h2>{title}</h2>
        <div className="prices">
            
            <h3>€{price}</h3>
            {/* <h3>${normalPrice}</h3> */}
        </div>
    </div>
    </Link>
  )
}

export default Card