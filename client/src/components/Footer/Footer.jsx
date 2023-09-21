import { Link } from 'react-router-dom'

import "./Footer.css"

const Footer = () => {
    return (
        <div className='smaller__section bg'>
            <div className="container">
                <div className="footer">
                    <div className="footer_image">
                        Showoff
                        <span>
                            Showcase And Display Your Arts, Design And Skill On The Worlds
                            Biggest Stage
                        </span>
                    </div>

                    <div className="quick_links">
                        <h4>QUICK LINKS</h4>
                        <Link to='/gallery'>
                            <span>Gallery</span>
                        </Link>
                        <Link to='/about'>
                            <span>About us</span>
                        </Link>
                        <Link to='/contact-us'>
                            <span>Contact us</span>
                        </Link>
                    </div>

                    <div className="social">
                        <h4>SOCIAL MEDIA</h4>
                        <i className="uil uil-facebook"></i>
                        <i className="uil uil-instagram"></i>
                        <i className="uil uil-twitter"></i>
                        <i className="uil uil-github"></i>
                        <button>Sign Up</button>
                    </div>
                </div>

                <hr
                    style={{
                        height: "0.5px",
                        borderWidth: 0,
                        color: "rgb(237, 3, 69)",
                        backgroundColor: "rgb(210, 210, 210)",
                        marginBottom: "40px",
                    }}
                />
                <span className="copy">
                    Copyright © 2021-2023 Showoff Company S.L. All rights reserved.
                </span>
            </div>
        </div>
    )
}

export default Footer