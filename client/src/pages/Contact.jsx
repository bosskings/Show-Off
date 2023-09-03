import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// css files
import './assets/css/nav.css';
import './assets/css/contact.css';
import './assets/css/footer.css';

const Contact = () => {
    return ( 

        <div>
            <Navbar />
            
            {/* <!-- ==================================== main Body ======================= --> */}
            <main>
                <div className="container">
                    <div className="contact">
                        <div className="first_section">
                            <div className="links">
                                <h2>Head Office</h2>
                                <ul>
                                    <li>
                                        <i className="uil uil-location-pin-alt"></i>34 D/line, Port
                                        Harcourt, Rivers State
                                    </li>
                                    <li>
                                        <i className="uil uil-phone"></i>+234 80944 22807, +234 80944
                                        22807
                                    </li>
                                    <li><i className="uil uil-envelope"></i>bmpinovations@gmail.com</li>
                                </ul>
                            </div>

                            <div className="open_hours">
                                <h2>Opening Hours</h2>
                                <ul>
                                    <li><span>Mondays: </span>1:00 AM - 11:00 PM</li>
                                    <li><span>Tuesdays: </span>1:00 AM - 11:00 PM</li>
                                    <li><span>Wednesdays: </span>1:00 AM - 11:00 PM</li>
                                    <li><span>Thursdays: </span>1:00 AM - 11:00 PM</li>
                                    <li><span>Fridays: </span>1:00 AM - 11:00 PM</li>
                                    <li><span>Saturdays: </span>1:00 AM - 11:00 PM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="second_section">
                            <form action="">
                                <h2>Send Us a Message</h2>

                                <label for="name">Your Name</label>
                                <input type="text" name="name" />

                                <label for="email">Your Email</label>
                                <input type="email" name="email" />

                                <label for="message">Your Message</label>
                                <textarea name="message" id="" cols="30" rows="10"></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />


        </div>

    );
}
 
export default Contact;