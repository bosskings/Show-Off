import React, { useState } from 'react';
import img6 from "../../assets/show5.webp";
import profileIcon from "../../assets/Profile-Icon.png";
import { Link } from 'react-router-dom'

const DesignItem = ({ design }) => {
    const [like, setLike] = useState(design.likes)

    const handleLike = () => {
        setLike(like + 1)
    }

    return (
        <div className="design">
            <img id='shot__main__img' src={img6} alt="" />
            <div className="shot_sec">
                <div>
                    <img
                        src={profileIcon}
                        alt=""
                    />

                    <Link to="">{design.art_name}</Link>
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
