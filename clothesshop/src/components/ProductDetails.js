import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function ProductDetails() {
  return (
    <>
        <Navbar />
        <main className='main'>
            <div className='container'>
                <div className='product-img'>
                    <img src='../images/scs.jpeg' alt='' />
                </div>

                <div className='product-info'>
                    <h3></h3>
                    <h1></h1>
                    <div className='size'>
                        <button>0</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>

                    <button>Add to cart</button>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default ProductDetails