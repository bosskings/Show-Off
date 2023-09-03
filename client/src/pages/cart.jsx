import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// css files
import './assets/css/nav.css';
import './assets/css/cart.css';
import './assets/css/footer.css';


// picture files
import img10 from "./assets/images/3266662_655 10.png";

const Cart = () => {
    return (  
        <div>
            <Navbar />

            {/* <!-- ================================ *main body* ============================== --> */}
            <main>
                <section className="container">
                    <div>
                        <div className="head">
                            <div className="cart">
                                <p>Item</p>
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Total</p>
                            </div>
                            <div className="item">
                                <div className="product">
                                    <img src={img10} alt="" width="100px" />
                                    <p>Digtal Art</p>
                                </div>
                                <p className="price">$100</p>
                                <div className="product-quan">
                                    <i className="uil uil-minus"></i>
                                    <p className="quantity">1</p>
                                    <i className="uil uil-plus"></i>
                                </div>
                                <p className="total">$100</p>
                            </div>
                            <button>Continue Shopping</button>
                        </div>

                        <div className="bottom">
                            <div className="subtotal">
                                <p>Subtotal</p>
                                <p>$100</p>
                            </div>
                            <div className="total_price">
                                <p>Total</p>
                                <p>$100</p>
                            </div>
                            <button>Proceed To Checkout</button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}
 
export default Cart;