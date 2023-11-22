import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const DesignItem = ({ design, handleOpen }) => {
    const [like, setLike] = useState(design?.likes || 0);

    const handleLike = () => {
        setLike(like + 1);
    };

    const userId = design?.id;
    console.log(design.img)

    return (
        <div className="design">
            <img id='shot__main__img' src={design.img} alt="" />
            <div className="shot_sec">
                <div>
                    <img
                        src={design.profilePic}
                        alt=""
                    />
                    <Link to="">{design.username}</Link>
                </div>
                <ul>
                    <li onClick={handleLike}>
                        <i className="uil uil-heart"></i> {like}
                    </li>
                    <li>
                        <i className="uil uil-eye"></i> {design?.views}K
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DesignItem;
