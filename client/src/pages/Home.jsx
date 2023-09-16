import React from 'react'

// import Navbar from '../components/Navbar/GeneralNavbar/Navbar'
import Banner from '../components/Home/Banner'
import PopularArt from '../components/Home/PopularArt'
import ReasonsHire from '../components/Home/ReasonsHire'
import GetStarted from '../components/Home/GetStarted'
import WhyShowOff from '../components/Home/WhyShowOff'
import QualityWork from '../components/Home/QualityWork'

const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Banner />
            <PopularArt />
            <GetStarted />
            <ReasonsHire />
            <WhyShowOff />
            <QualityWork />
        </>
    )
}

export default Home