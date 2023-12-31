import React from 'react'
import RatingStars from '../Shop/RatingStars'
import { Link } from 'react-router-dom'

const Designer = ({ user }) => {
    const userId = user.id
    return (
        <div className='designer__container'>
            <div className="designer__item">
                <img id='designer__img' src={user.profilePic} alt={user.username} width={50} />
                <div className='designer__content'>
                    <div className="designer__details">
                        <p id='designer__name'>{user.username}</p>
                        <p id='designer__job'>{user.specialty}</p>
                        <div className='rating'>
                            <RatingStars rating={user.rating} />
                        </div>
                    </div>
                    <div className="designer__button">
                        <Link to={`/dashboard/${userId}`}>View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Designer