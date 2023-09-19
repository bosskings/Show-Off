import React from 'react'

import "../components/About/About.css"
import Navbar from "../components/Navbar/GeneralNavbar/Navbar"
import Footer from "../components/Footer/Footer"
import AboutHead from '../components/About/AboutHead'
import TrustedBy from '../components/About/TrustedBy'
import GoalAndNumber from '../components/About/GoalAndNumber'

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHead />
            <TrustedBy />
            <GoalAndNumber />
            <Footer />
        </>
    )
}

export default About