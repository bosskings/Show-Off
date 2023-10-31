import React from 'react'

import { useArtistsList } from '../../contexts/ArtistsContexts'

const Sorting = () => {
    const { keyWord, setKeyWord } = useArtistsList()
    return (
        <div className='sorting'>
            <div className='sorting__container'>
                <div className="field__wrapper">
                    <p>Keyword Search</p>
                    <input
                        type="text"
                        placeholder='Search keywords...'
                    // onChange={setKeyWord(e.target.value)}
                    // value={keyWord}
                    />
                </div>
                <div className="field__wrapper">
                    <p>Specialties</p>
                    <input type="text" placeholder='Search Specialties...' />
                </div>
                <div className="field__wrapper">
                    <p>Location</p>
                    <input type="text" placeholder='Search Location...' />
                </div>
                <div className='sorting__positions'>
                    <div className="v-checkbox">
                        <input type="checkbox" name="" id="" />
                        <p>Remote Position</p>
                    </div>
                    <div className="v-checkbox">
                        <input type="checkbox" name="" id="" />
                        <p>On-site Position</p>
                    </div>
                </div>
                <div className='sorting__yearsofexperience'>
                    <p className='sorting__yearsofexperience-head'>Experience Level</p>
                    <div className='level__container'>
                        <div className="v-checkbox">
                            <input type="checkbox" name="" id="" />
                            <p>1-2 years</p>
                        </div>
                        <div className="v-checkbox">
                            <input type="checkbox" name="" id="" />
                            <p>3-5 years</p>
                        </div>
                        <div className="v-checkbox">
                            <input type="checkbox" name="" id="" />
                            <p>6-8 years</p>
                        </div>
                        <div className="v-checkbox">
                            <input type="checkbox" name="" id="" />
                            <p>9+ years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sorting