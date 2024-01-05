import { Backdrop } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DesignDetails from './DesignDetails';
import profileIcon from "../../assets/show1.webp";

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
            setSelectedItemId(null);
        }

        setOpen(false)
    }

    const userId = design?.user?.id;

    return (
        <>
            <div className="design">
                {design.art_dir && (
                    design.art_dir.endsWith('.mp4') ? (
                        <video id="shot__main__img" muted loop autoPlay src={design.art_dir} onClick={handleOpen} />
                    ) : (
                        <img id="shot__main__img" onClick={handleOpen} src={design.art_dir} alt="" />
                    )
                )}
                <div className="shot_sec">
                    <div>
                        <img src={profileIcon} alt="" />
                        <Link to={`/dashboard/${userId}`}>{design?.art_name}</Link>
                    </div>
                    <ul>
                        <li onClick={handleLike}>
                            <i className="uil uil-heart"></i> {design?.art_rating}
                        </li>
                        <li>
                            <i className="uil uil-eye"></i> {design?.art_likes}K
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
