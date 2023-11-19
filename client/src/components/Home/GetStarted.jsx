import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
    return (
        <div className='bg2 small__section'>
            <div className="container">
                <div className="get__started">
                    <div className='get__started__head'>
                        <h2>
                            When only the best talent will do
                        </h2>
                    </div>
                    <div className='get__started__right'>
                        <p>
                            See why over 60,000 leading brands and business builders use ShowOff to attract, engage, and hire their best design talent.
                        </p>
                        <div>
                            <Link to="/artists">
                                Get Started <i className="uil uil-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted