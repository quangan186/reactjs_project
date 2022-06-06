import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Advertisement from '../components/Advertisement';
import CardProduct from '../components/CardProduct';
import ProductList from '../components/ProductList';

function Home() {
    return (
        <>
            <main className='main'>
                <Advertisement />
                <ProductList />   
            </main>
            
            
        </>
    );
}

export default Home;