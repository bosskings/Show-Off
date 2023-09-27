import React from 'react'

import Testimony from './Testimony'
import Img from '../../assets/left.png'

const OurWallOfLove = () => {
    return (
        <div className='bg2 smaller__section'>
            <div className="container">
                <div className="testimonies__container">
                    <h2>Our People are what matters</h2>
                    <div className="testimonies">
                        <Testimony user={"ueno"} img={Img} comment={"My work was spotted on ShowOff by my employer, who had been searching the site for local designers. I was then asked to visit the agency offices for an informal interview and was offered the job straight away!"} />
                        <Testimony user={"Chewy"} img={Img} comment={"ShowOff has been our primary source when looking for talent, half of our design team was found within the community. Anyone looking for top creatives should be using ShowOff."} />
                        <Testimony user={"Adam Glynn-Finnegan"} img={Img} comment={"I used to rummage through my browser bookmarks to source freelance design talent. Now my first port of call is ShowOff. The majority of contracts for external designers has come from people I follow on ShowOff. Win!"} />
                        <Testimony user={"Will Barron"} img={Img} comment={"There is absolutely no doubt in my mind that without ShowOff, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through ShowOff made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through"} />
                        <Testimony user={"Claudiu Cioba"} img={Img} comment={"Because of ShowOff I managed to increase my profit more then 10 times in just a year. It was the most amazing experience of my life and I am still living it! Thank you guys for keeping the ShowOff community alive!"} />
                        <Testimony user={"Will Barron"} img={Img} comment={"Thanks to ShowOff, I, a young designer from a small town in Utah, was able to connect, collaborate, and hire all star designers from around the world to help me with my startup."} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWallOfLove