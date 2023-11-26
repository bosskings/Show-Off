import React from 'react'

import '../components/Shop/Shop.css'
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import DesignShop from '../components/Shop/DesignShop'
import ShopBanner from '../components/Shop/ShopBanner'

const Shop = () => {
    return (
        <>
            <Navbar />
            <ShopBanner />
            <DesignShop />
            <Footer />
        </>
    )
}

export default Shop