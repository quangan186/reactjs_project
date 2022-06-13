import React from "react";
import CardProduct from "./CardProduct";
import "../styles/ProductList.scss"

function ProductList(props) {
  const {products, onSelectProduct, getProduct} = props
  return (
    <div className="products-container">
      <h1 className="text-center my-5">Store</h1>
      <div className="products-list d-flex justify-content-evenly flex-wrap">
        {products.map((product) => {
          return(
            <CardProduct product={product} imgSrc={product.imgSrc} name = {product.name} price = {new Intl.NumberFormat().format(product.price)} key={product.id} onSelectProduct={onSelectProduct} getProduct={getProduct}/>
          )
        })}
      </div>
    </div>
  );
}

export default ProductList;
