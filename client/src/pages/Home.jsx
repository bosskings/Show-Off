import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// css files
import './assets/css/nav.css';
import './assets/css/index.css';
import './assets/css/footer.css';


// get images
import image1 from "./assets/images/b.png";
import image2 from "./assets/images/a.png";
import image3 from "./assets/images/show1.webp";
import image4 from "./assets/images/show2.webp";
import image5 from "./assets/images/show3.webp";
import image6 from "./assets/images/show4.webp";
import image7 from "./assets/images/show5.webp";
import image8 from "./assets/images/show6.webp";
import image9 from "./assets/images/bag (1).jpg";
import image10 from "./assets/images/bag (2).jpg";
import image11 from "./assets/images/bag (5).png";
import image12 from "./assets/images/pic1.jpg";
import image13 from "./assets/images/pic2.jpg";
import image14 from "./assets/images/pic3.jpg";


const Home = () =>{
    return(
        <div>

            {/*   Nav bar components */}
            <Navbar />  


            {/* <!-- ==================================== main Body ======================= --> */}
            <section id="main-body">
                <div>
                    <h2>Explore our world leading unique</h2>
                    <h1>Digital Art Creation</h1>
                    <p>
                        Millions of designers and agencies around the world showcase their
                        portfolio work on ShowOff <br />
                        home to the world’s best design and creative professionals.
                    </p>
                    <div className="span">
                        <span className="register">Register</span>
                        <span className="login">Login</span>
                    </div>
                </div>
            </section>

            {/* <!-- ===================================== AFTER BODY ============================== --> */}

            <section id="after-body1">
                <img src={image1} alt="" />
                <div className="after1-flex">
                    <h3>Make Sure Everyone Knows</h3>
                    <h1>Tour Dates Layout</h1>
                    <p>
                        Display all of your tour dates, along with locations and ticket
                        availability. Make sure everyone knows where your next gig Display all
                        of your tour dates, along with locations and ticket availability. Make
                        sure everyone knows where your next gig Display all of your tour
                        dates, along with locations and ticket availability. Make sure
                        everyone knows where your next gig Display all of your tour dates,
                        along with locations and ticket availability. Make sure everyone knows
                        where your next gig Display all of your tour dates, along with
                        locations and ticket availability. Make sure everyone knows where your
                        next gig
                    </p>
                </div>
            </section>

            {/* <!-- ============================== body two ========================================= --> */}
            <section id="after-body2">
                <div className="after2-flex">
                    <h3>Make Sure Everyone Knows</h3>
                    <h1>Tour Dates Layout</h1>
                    <p>
                        Display all of your tour dates, along with locations and ticket
                        availability. Make sure everyone knows where your next gig Display all
                        of your tour dates, along with locations and ticket availability. Make
                        sure everyone knows where your next gig Display all of your tour
                        dates, along with locations and ticket availability. Make sure
                        everyone knows where your next gig Display all of your tour dates,
                        along with locations and ticket availability. Make sure everyone knows
                        where your next gig Display all of your tour dates, along with
                        locations and ticket availability. Make sure everyone knows where your
                        next gig
                    </p>
                </div>
                <img src={image2} alt="" />
            </section>

            {/* <!-- ============================ Collections ============================== --> */}
            <section id="collections">
                <div className="collect1">
                    <h1>Trending collections to boost your ideas</h1>
                    <p>
                        Explore Showoff trendiest collections and find the perfect visual.
                    </p>
                </div>

                <div className="collect2">
                    <div className="collect2-body">
                        <img src={image3} alt="" />
                        <div className="p_des">
                            <p><i className="uil uil-object-ungroup"></i> Animations</p>
                            <p><i className="uil uil-layer-group"></i> 100 resources</p>
                        </div>
                    </div>

                    <div className="collect2-body">
                        <img src={image4} alt="" />
                        <div className="p_des">
                            <p><i className="uil uil-object-ungroup"></i> Branding</p>
                            <p><i className="uil uil-layer-group"></i> 50 resources</p>
                        </div>
                    </div>

                    <div className="collect2-body">
                        <img src={image5} alt="" />
                        <div className="p_des">
                            <p><i className="uil uil-object-ungroup"></i> Illustration</p>
                            <p><i className="uil uil-layer-group"></i> 200 resources</p>
                        </div>
                    </div>

                    <div className="collect2-body">
                        <img src={image6} alt="" />
                        <div className="p_des">
                            <p><i className="uil uil-object-ungroup"></i> Paint</p>
                            <p><i className="uil uil-layer-group"></i> 150 resources</p>
                        </div>
                    </div>

                    <div className="collect2-body">
                        <img src={image7} alt="" />
                        <div className="p_des">
                            <p><i className="uil uil-object-ungroup"></i> Print</p>
                            <p><i className="uil uil-layer-group"></i> 100 resources</p>
                        </div>
                    </div>

                    <div className="collect2-body">
                        <img src={image8} alt="" />
                        <div className="p_des">
                            <p><i className="uil uil-object-ungroup"></i> Web Design</p>
                            <p><i className="uil uil-layer-group"></i> 30 resources</p>
                        </div>
                    </div>
                </div>

                <button>See More</button>
            </section>

            {/* <!-- ===================================== Show Case ==================================== --> */}

            <section className="show-case">
                <p>Vibrant Art Work And Design</p>
                <h1>Showcase Your Work</h1>


                {/* for wipper */}

                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <img src={image9} alt="" />
                        </div>

                        <div className="swiper-slide">
                            <img src={image10} alt="" />
                        </div>

                        <div className="swiper-slide">
                            <img src={image11} alt="" />
                        </div>

                        <div className="swiper-slide">
                            <img src={image12} alt="" />
                        </div>

                        <div className="swiper-slide">
                            <img src={image13} alt="" />
                        </div>

                        <div className="swiper-slide">
                            <img src={image14} alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
            
            {/*<!-- ============================footer============================ --> */}            
            <Footer />

        </div>
    )
}

export default Home