import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import service1 from '../../assets/show1.webp'
import service2 from '../../assets/show2.webp'
import service3 from '../../assets/show3.webp'
import service4 from '../../assets/show4.webp'

const PopularArt = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className='bg smaller__section'>
            <div className="container">
                <div className="popular">
                    <div id='popular__head'>
                        <h3>Popular Service</h3>
                    </div>
                    <div className='works'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            ssr={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-60-px"
                        >
                            <div className="shot">
                                <img src={service1} alt="" id='service' />
                                <div className="shot_sec">
                                    <p>Animation</p>
                                </div>
                            </div>
                            <div className="shot">
                                <img src={service2} alt="" id='service' />
                                <div className="shot_sec">
                                    <p>Branding</p>
                                </div>
                            </div>
                            <div className="shot">
                                <img src={service3} alt="" id='service' />
                                <div className="shot_sec">
                                    <p>Illustration</p>
                                </div>
                            </div>
                            <div className="shot">
                                <img src={service4} alt="" id='service' />
                                <div className="shot_sec">
                                    <p>Paint</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div id='popular__btn'>
                        <Link to="/gallery">
                            <button>View Work <i className="uil uil-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularArt