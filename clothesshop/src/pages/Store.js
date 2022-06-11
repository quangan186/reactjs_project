import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

function Store(props) {
    const {products} = props
    return (
        <>
            <Navbar />
            <ProductList products={products} /> 
            <Footer />
        </>
    );
}

export default Store;