import React from 'react'

import "../components/About/About.css"
import Navbar from "../components/Navbar/GeneralNavbar/Navbar"
import Footer from "../components/Footer/Footer"
import AboutHead from '../components/About/AboutHead'
import TrustedBy from '../components/About/TrustedBy'
import GoalAndNumber from '../components/About/GoalAndNumber'
import OurWallOfLove from '../components/About/OurWallOfLove'
import Advertise from '../components/About/Advertise'
import WhyAdvertise from '../components/About/WhyAdvertise'

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHead />
            <TrustedBy />
            <GoalAndNumber />
            <OurWallOfLove />
            <Advertise />
            <WhyAdvertise />
            <Footer />
        </>
    )
}

export default About