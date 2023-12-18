import React from 'react'

const DesignDetails = ({ handleClose }) => {
    return (
        <div className='design__details'>
            <i className="uil uil-times filter__close" onClick={handleClose}></i>
            <p>This is a scrollable text</p>
        </div>
    )
}

export default DesignDetails