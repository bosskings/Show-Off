import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import "./Home.css"
import Navbar from '../Navbar/GeneralNavbar/Navbar'
import Bg1 from '../../assets/fullscreen-pieces-background1-img-2.png'
import Bg2 from '../../assets/fullscreen-pieces-background2-img-2.png'
import Bg3 from '../../assets/fullscreen-pieces-background3-img-2.png'

const Banner = () => {
    return (
        <div className=' bg banner'>
            < Navbar />
            <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={30}
                // mousewheel={true}
                autoplay={{ delay: 6000 }}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper1">
                        <div className='image__holder'>
                            <img src={Bg1} alt="" />
                        </div>
                        <div className='text__holder1'>
                            <h2>Explore our world leading unique</h2>
                            <h1>Digital Art Creation</h1>
                            <p>
                                Millions of designers and agencies around the world showcase their
                                portfolio work on ShowOff
                                home to the world’s best design and creative professionals.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper2">
                        <div className='image__holder'>
                            <img src={Bg2} alt="" height="573" width="933" />
                        </div>
                        <div className='text__holder2'>
                            <h1>Hire the world’s top creative talent.</h1>
                            <p>
                                Connect with a community of millions of top-rated designers & agencies around the world.
                            </p>
                            <button>Start hiring today!</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper3">
                        <div className='image__holder'>
                            <img src={Bg3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Banner