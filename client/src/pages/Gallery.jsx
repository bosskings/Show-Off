import React, { useState } from 'react'

import "../components/Gallery/Gallery.css"
import DesignGallery from '../components/Gallery/DesignGallery'
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import GalleryBanner from '../components/Gallery/GalleryBanner'
import { Backdrop } from '@mui/material'
import DesignDetails from '../components/Gallery/DesignDetails'

const Gallery = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(!open)
    }
    return (
        <>
            <Navbar />
            <GalleryBanner />
            <DesignGallery handleOpen={handleOpen} />
            <Backdrop
                open={open}
            >
                <DesignDetails handleClose={handleClose} />
            </Backdrop>
            <Footer />
        </>
    )
}

export default Gallery