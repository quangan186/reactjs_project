import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductDetails from '../components/ProductDetails';
import ProductList from '../components/ProductList';

function Store(props) {
    const {products} = props
    let [selectedProduct, setSelectedProduct] = useState(null)
    const onSelectProduct = (id) => {
        console.log(id);
        selectedProduct = products.find(product => product.id === id);
        setSelectedProduct(selectedProduct);
    }

    const getProduct = () =>{
        for (let product of products){
            if (product.id === selectedProduct){
                return <ProductDetails name={product.name} price={product.price} size={product.size} imgSrc={product.imgSrc}/>
            }
        }
    }
    return (
        <>
            <Navbar />
            <ProductList products={products} onSelectProduct={onSelectProduct} getProduct={getProduct}/> 
            <Footer />
        </>
    );
}

export default Store;