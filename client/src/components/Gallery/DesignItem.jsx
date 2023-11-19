import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DesignItem = ({ design, handleOpen }) => {
    const [like, setLike] = useState(design?.likes || 0);

    const handleLike = () => {
        setLike(like + 1);
    };

    const userId = design?.id;
    console.log(design.img)

    return (
        <div className="design">
            {design.img && (
                design.img.endsWith('.mp4') ? (
                    <video id="shot__main__img" muted loop autoPlay src={design.img} onClick={handleOpen} />
                ) : (
                    <img id="shot__main__img" onClick={handleOpen} src={design.img} alt="" />
                )
            )}
            {/* <img id="shot__main__img" src={design?.img} alt="" onClick={handleOpen} /> */}
            <div className="shot_sec">
                <div>
                    <img src={design?.profilePic} alt="" />
                    <Link to={`/dashboard/${userId}`}>{design?.username}</Link>
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
