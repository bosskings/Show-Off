import React, { useState } from 'react';

const DesignItem = ({ design }) => {
    const [like, setLike] = useState(design.likes)

    const handleLike = () => {
        setLike(like + 1)
    }

    return (
        <div className="design">
            <img id='shot__main__img' src={design.img} alt="" />
            <div className="shot_sec">
                <div>
                    <img
                        src={design.profilePic}
                        alt=""
                    />
                    <p>{design.art_name}</p>
                </div>
                <ul>
                    <li onClick={handleLike}><i className="uil uil-heart"></i> {like}</li>
                    <li><i className="uil uil-eye"></i> {design.views}K</li>
                </ul>
            </div>
        </div>
    );
};

export default DesignItem;
