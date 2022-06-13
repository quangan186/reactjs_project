import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";
import "../styles/ProductList.scss"

// const useFetch = url => {
//   const [data, setData] =  useState(null);
//   const [loading, setLoading] = useState(true)
  
//   useEffect(async () =>{
//     const responseJson = await fetch(url)
//     const data = await responseJson.json();
//     setData(data)
//     setLoading(false);
//   }, [])
//     return {data, loading}
// }

function ProductList(props) {
  // const [data, loading] = useFetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list")
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
