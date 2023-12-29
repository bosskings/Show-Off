import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const DesignItem = ({ design, handleOpen }) => {
    const [like, setLike] = useState(design?.art_likes || 0);

    const handleLike = () => {
        setLike(like + 1);
    };

    return (
        <div className="design">
            <img id='shot__main__img' src={design.art_dir} alt="" />
            <div className="shot_sec">
                <div>
                    <img
                        src={design.profilePic}
                        alt=""
                    />
                    <Link to="">{design.art_name}</Link>
                </div>
                <ul>
                    <li onClick={handleLike}>
                        <i className="uil uil-heart"></i> {like}
                    </li>
                    <li>
                        <i className="uil uil-star"></i> {design?.art_rating}K
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DesignItem;
