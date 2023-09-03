import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// css files
import './assets/css/nav.css';
import './assets/css/gallery.css';

// picture files
import show1 from './assets/images/show1.webp'; 
import show2 from './assets/images/show2.webp'; 
import show3 from './assets/images/show3.webp'; 
import show4 from './assets/images/show4.webp'; 
import show5 from './assets/images/show5.webp'; 
import show6 from './assets/images/show6.webp'; 
import staticImg from './assets/images/301c9ef303e9dc613190b06b5844e939 1.png'; 

const Gallery = () => {
    return (  
        <div>
            <Navbar />
            {/* <!-- ==================================== main Body ======================= --> */}
            <section id="main-body">
                <div>
                    <h2>Explore our best digital / art work</h2>
                    <h1>Best Digital / Art Work</h1>
                    <div className="span">
                        <input type="text" placeholder='Search.......'/>
                        <button><i className="uil uil-search-alt"></i></button>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="gallery">
                    <div className="shot">
                        <img src={show1} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt=""/>
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show2} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show3} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show4} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show5} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show6} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show1} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={show5} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show3} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show6} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show2} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show5} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                    <div className="shot">
                        <img src={show3} alt="" />
                        <div className="shot_sec">
                            <div>
                                <img src={staticImg} alt="" />
                                <p>Carazan Brands</p>
                            </div>
                            <ul>
                                <li><i className="uil uil-heart"></i> 179</li>
                                <li><i className="uil uil-eye"></i> 15.7k</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
 
export default Gallery;