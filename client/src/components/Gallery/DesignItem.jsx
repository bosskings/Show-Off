import React, { useState } from 'react';

const DesignItem = ({ design }) => {
    const [like, setLike] = useState(design.likes)

    const handleLike = () => {
        setLike(like + 1)
    }

    return (
        <div class="design">
            <img id='shot__main__img' src={design.img} alt="" />
            <div class="shot_sec">
                <div>
                    <img
                        src={design.profilePic}
                        alt=""
                    />
                    <p>{design.username}</p>
                </div>
                <ul>
                    <li onClick={handleLike}><i class="uil uil-heart"></i> {like}</li>
                    <li><i class="uil uil-eye"></i> {design.views}K</li>
                </ul>
            </div>
        </div>
    );
};

export default DesignItem;
