import React from 'react';

const DesignItem = ({ design }) => {
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
                    <li><i class="uil uil-heart"></i> 179</li>
                    <li><i class="uil uil-eye"></i> 15.7k</li>
                </ul>
            </div>
        </div>
    );
};

export default DesignItem;
