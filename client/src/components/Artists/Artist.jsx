import React from 'react'

// import { users } from './userData'
import Designer from './Designer'

import { useArtistsList } from '../../contexts/ArtistsContexts'
const Artist = () => {
    const { filteredArtists } = useArtistsList()
    return (
        <div className='artist'>
            <div className='artist__body'>
                <div className='artist__top-content'>
                    <div className="artist__container">
                        <div className='artist__top'>
                            <h2>Talents for Hire</h2>
                            <p id='artist__p1'>Find the world’s best designers on ShowOff – the largest independent community for digital designers.</p>
                            <div className='artist__stats'>
                                <p>Want to be at the top? Subscribe to increase your stats</p>
                                <button>Get Started</button>
                            </div>
                            <p id='numberof__talents'>Viewing 10,000+ designers available for hire</p>
                        </div>
                    </div>
                </div>
                <div className='artist__bottom'>
                    {filteredArtists.map((user) => (
                        <Designer key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Artist