import React from 'react'


import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import CartPage from '../components/Cart/CartPage'
import "../components/Cart/Cart.css"

const Cart = () => {
    return (
        <>
            <Navbar />
            <CartPage />
            <Footer />
        </>
    )
}

export default Cart