import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// css files
import './assets/css/nav.css';
import './assets/css/shop.css';

// picture files
import show1 from './assets/images/show1.webp'; 
import show2 from './assets/images/show2.webp'; 
import show3 from './assets/images/show3.webp'; 
import show4 from './assets/images/show4.webp'; 
import show5 from './assets/images/show5.webp'; 
import show6 from './assets/images/show6.webp';

const Shop = () => {
    return ( 
        <div>
            <Navbar />
            {/* <!-- ==================================== main Body ======================= --> */}
            <section id="main-body">
                <div>
                    <h2>Explore our shop page</h2>
                    <h1>Best Digital / Art Work</h1>
                    <div className="span">
                        <input type="text" placeholder="search..." />
                        <button><i className="uil uil-search-alt"></i></button>
                    </div>
                </div>
            </section>

            <section className="gallery">
                <div className="shot">
                    <img src={show1} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show2} alt="" />
                    <div className="shot_sec">
                        <p>Branding</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show3} alt="" />
                    <div className="shot_sec">
                        <p>Illustrations</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show4} alt="" />
                    <div className="shot_sec">
                        <p>Paint</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show5} alt="" />
                    <div className="shot_sec">
                        <p>Print</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show6} alt="" />
                    <div className="shot_sec">
                        <p>Design</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show4} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show3} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show6} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show2} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show5} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
                <div className="shot">
                    <img src={show1} alt="" />
                    <div className="shot_sec">
                        <p>Animation</p>
                        <ul>
                            <li><i className="uil uil-shopping-cart-alt"></i></li>
                            <li>$500</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
 
export default Shop;