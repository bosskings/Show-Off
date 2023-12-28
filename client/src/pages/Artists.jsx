import React from 'react'


import "../components/Artists/Artists.css"
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import ArtistContent from '../components/Artists/ArtistContent'
import Filter from '../components/Artists/Filter'
import { ArtistsListProvider } from '../contexts/ArtistsContexts'

const Artists = () => {
    return (
        <>
        <ArtistsListProvider>
            <Navbar />
            <ArtistContent />
            <Filter />
            <Footer />
        </ArtistsListProvider>
        </>
    )
}

export default Artists