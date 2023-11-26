import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ad1 from '../../assets/video/media-video6.mp4'
import ad2 from '../../assets/media1.jpg'
import ad3 from '../../assets/media2.jpg'
import ad4 from '../../assets/media3.jpg'
import ad5 from '../../assets/video/media-video5.mp4'

const Advertise = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='bg2 section'>
            <div className="container">
                <div className="advertise__container">
                    <div id='advertise__head'>
                        <h2 >Connect with creative, product, & business decision makers worldwide</h2>
                    </div>
                    <div className="advert">
                        <div className="advert__content">
                            <h2>
                                Stop interrupting. Start inspiring with bespoke native ads, editorial, and much more.
                            </h2>
                            <p>
                                Advertise your brand organically within ShowOff design inspiration feeds. Our native Boosted Shots act just like the regular ShowOff shots designers post on our website – just way more visible. Keep the conversation going by tapping into our community with custom editorial placements, our interactive “Playoffs”, email integrations, and so much more.
                            </p>
                            <p>
                                Whether driving awareness, announcing a product launch, or showcasing a special offer, we have your hard to reach audience and you have control over the design, copy, CTA, and destination.
                            </p>
                            <Link to="/about#lookingtoadvertise">
                                <button>Advertise with us</button>
                            </Link>
                        </div>
                        <div className='ads'>
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                ssr={true}
                                autoPlaySpeed={5000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-60-px"
                            >
                                <div className='ad'>
                                    <video src={ad1} loop muted autoPlay></video>
                                </div>
                                <div className='ad'>
                                    <img src={ad2} alt="" />
                                </div>
                                <div className='ad'>
                                    <img src={ad3} alt="" />
                                </div>
                                <div className='ad'>
                                    <img src={ad4} alt="" />
                                </div>
                                <div className='ad'>
                                    <video src={ad5} loop muted autoPlay></video>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertise