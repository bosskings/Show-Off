import React from 'react'

const LookingToAdvertise = () => {
    return (
        <div className='bg2 smaller__section'>
            <div className="container">
                <div className="advertisement__details" id='lookingtoadvertise'>
                    <div className="advertisement__details__head">
                        <h2>Looking to advertise on ShowOff?</h2>
                        <p>
                            Let us know your name, email address, company URL, and anything else you’d like us to know ahead of time.
                        </p>
                    </div>
                    <div className="advertisement__details__form">
                        <div className='advertisement__details__form__inner'>
                            <form action="">
                                <div className='form__input'>
                                    <input type="text" placeholder='Full name' />
                                    <input type="email" placeholder='Email address' />
                                </div>
                                <textarea class="framer-formspark-input" placeholder="Company, budget info, and any other details" name="message"></textarea>
                                <div id='advertisement__details__submit'>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingToAdvertise