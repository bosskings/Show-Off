import React from 'react'

import "../components/Contact/Contact.css"
import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Footer from '../components/Footer/Footer'
import FirstSection from '../components/Contact/FirstSection'

const Contact = () => {
    return (
        <>
            <Navbar />
            <FirstSection />
            <Footer />
        </>
    )
}

export default Contact