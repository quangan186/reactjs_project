import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct() {
  return (
    <div class="card w-25 mx-3 my-3">
        <Link to="/store"></Link> <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/122021/1639018137793.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Letter shirt</h5>
            <p className="card-text">$20</p>
        </div>
    </div>
  )
}

export default CardProduct