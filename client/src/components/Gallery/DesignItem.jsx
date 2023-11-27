import { Backdrop } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DesignDetails from './DesignDetails';

const DesignItem = ({ design }) => {
    const [like, setLike] = useState(design?.likes || 0);
    const [likeIcon, setLikeIcon] = useState("uil uil-heart");
    const [waiting, setWaiting] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleLike = () => {
        setLike(like + 1);

        if (waiting) return;

        setWaiting(true);

        setTimeout(() => {
            setLikeIcon((prevLikeIcon) => (prevLikeIcon === 'uil uil-heart' ? 'uil uil-heart liked' : 'uil uil-heart'));
            setWaiting(false);
        }, 1000);
    };


    const handleOpen = (itemId) => {
        setOpen(true);
        setSelectedItemId(itemId);
    }

    const handleClose = () => {
        if (selectedItemId === design?.id) {
            setOpen(false);
            setSelectedItemId(null); // Reset the selected item ID
        }

        setOpen(false)
    }

    const userId = design?.user?.id;

    return (
        <>
            <div className="design">
                {design.img && (
                    design.img.endsWith('.mp4') ? (
                        <video id="shot__main__img" muted loop autoPlay src={design.img} onClick={handleOpen} />
                    ) : (
                        <img id="shot__main__img" onClick={handleOpen} src={design.img} alt="" />
                    )
                )}
                <div className="shot_sec">
                    <div>
                        <img src={design?.user?.profilePic} alt="" />
                        <Link to={`/dashboard/${userId}`}>{design?.user?.username}</Link>
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

            <Backdrop
                open={open}
            >
                <DesignDetails
                    design={design}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    handleLike={handleLike}
                    likeIcon={likeIcon}
                    like={like}
                    waiting={waiting}
                />
            </Backdrop>
        </>
    );
};

export default DesignItem;
