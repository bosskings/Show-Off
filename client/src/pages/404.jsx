import React from 'react'

import Error from '../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='error__404'>
            <img src={Error} alt="" />
        </div>
    )
}

export default ErrorPage