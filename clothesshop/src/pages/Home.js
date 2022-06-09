import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Advertisement from '../components/Advertisement';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

function Home() {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Advertisement />
                <ProductList />   
            </main>
            <Footer />
        </>
    );
}

export default Home;