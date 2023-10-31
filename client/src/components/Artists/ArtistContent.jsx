import React from 'react'

import Artist from './Artist'
import TypeOfSearch from './TypeOfSearch'
import Sorting from './Sorting'

const ArtistContent = () => {
    return (
        <div className='bg2 section'>
            <div className="ArtistContent__container">
                <div className="Artists__container">
                    <TypeOfSearch />
                    <Artist />
                    <Sorting />
                </div>
            </div>
        </div>
    )
}

export default ArtistContent