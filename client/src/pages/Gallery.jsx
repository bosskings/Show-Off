import React from 'react'

import "../components/Gallery/Gallery.css"
import DesignGallery from '../components/Gallery/DesignGallery'
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'

const Gallery = () => {
    return (
        <>
            <Navbar />
            <DesignGallery />
            <Footer />
        </>
    )
}

export default Gallery