import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

// css files
import './assets/css/nav.css'
import './assets/css/about.css'

// picture file
import abt1 from "./assets/images/about 1.png";
import img1 from "./assets/images/images1.png";
import { Link } from 'react-router-dom';

const About = () => {
    return (  
        <div>
            <Navbar />

            <main>
                <section className="about-head">
                    <div className="about-info-head">
                        <h2>The Heart of the Designer Community</h2>
                        <p>
                            We’re on a mission to build the world’s best community for creatives
                            to share, grow, and get hired.
                        </p>
                    </div>
                    <div className="about-info-img">
                        <img src={abt1} alt="" />
                    </div>
                </section>

                <section className="about-body">
                    <div className="about-body-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="about-body-info">
                        <h2>One of fastest-growing start-ups</h2>
                        <p className="fp">
                            Tens of millions of people look for design inspiration and feedback
                            on Showoff. We help players like you share small screenshots (shots)
                            to show off your current projects, boost your portfolio, and love
                            what you do—no matter what kind of creative professional you are.
                        </p>
                        <p className="sp">
                            Founded in 2023, we are a bootstrapped and profitable Platform
                            helping design talent share, grow, and get hired by over 40,000 of
                            today’s most innovative brands around the world.
                        </p>
                    </div>
                </section>

                <section className="banner">
                    <p>
                        Showoff is the single most important social network for anyone that
                        cares about design. It’s done more to help us build our team and brand
                        than Facebook, Twitter and Instagram combined.
                    </p>
                </section>

                <section className="join">
                    <h2>Join Us Now</h2>
                    <p>
                        Since we are a 100% distributed team, you can work from anywhere. No
                        need to move for a job. We are proud of a culture of communication,
                        collaboration, trust and kindness.
                    </p>
                    <button><Link to={"/signup"} /></button>
                </section>
            </main>

            <Footer />
        </div>
    );
}
 
export default About;