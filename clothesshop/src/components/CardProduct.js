import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct(props) {
  const {product} = props
  const {imgSrc, name, price} = product
  return (
    <div class="card w-25 mx-3 my-5">
        <Link to="/product"><img src={imgSrc} className="card-img-top" alt="..." /></Link> 
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{new Intl.NumberFormat().format(price)} VND</p>
        </div>
    </div>
  )
}

export default CardProduct