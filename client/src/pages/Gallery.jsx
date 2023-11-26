import React from 'react'

import "../components/Gallery/Gallery.css"
import DesignGallery from '../components/Gallery/DesignGallery'
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import GalleryBanner from '../components/Gallery/GalleryBanner'

const Gallery = () => {
    return (
        <>
            <Navbar />
            <GalleryBanner />
            <DesignGallery />
            <Footer />
        </>
    )
}

export default Gallery