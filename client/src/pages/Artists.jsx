import React from 'react'


import "../components/Artists/Artists.css"
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import ArtistContent from '../components/Artists/ArtistContent'

const Artists = () => {
    return (
        <>
            <Navbar />
            <ArtistContent />
            <Footer />
        </>
    )
}

export default Artists