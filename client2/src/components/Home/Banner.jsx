import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
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
                mousewheel={true}
                autoplay={{ delay: 6000 }}
                modules={[Mousewheel, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper1">
                        <div className='image__holder'>
                            <img src={Bg1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper2">
                        <div className='image__holder'>
                            <img src={Bg2} alt="" height="573" width="933" />
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