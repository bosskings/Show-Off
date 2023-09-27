import React from 'react'

const Testimony = ({ comment, img, user }) => {
    return (
        <div className='testimony'>
            <p id='comment'>
                {comment}
            </p>
            <div className='testimony__user'>
                <img src={img} alt="" />
                <p>{user}</p>
            </div>
        </div>
    )
}

export default Testimony