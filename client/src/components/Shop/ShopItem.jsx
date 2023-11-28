import { useState } from 'react';
import { Backdrop } from '@mui/material';

import RatingStars from './RatingStars';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import ShopDetails from '../Shop/ShopDetails';

const ShopItem = ({ design }) => {
    const [liked, setLiked] = useState(false);
    const [likeIcon, setLikeIcon] = useState("uil uil-heart");
    const [waiting, setWaiting] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const { addToCart, removeFromCart, cart } = useShoppingCart();

    const handleLike = () => {
        setLiked(!liked);

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

    const likeColor = liked ? "var(--red-color)" : "";

    const isInCart = cart.some(item => item.id === design.id);

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
                <div className="shop__sec">
                    <div className='shop__sec__details'>
                        <p>{design.title}</p>
                        <div className='rating'>
                            <RatingStars rating={design.rating} />
                        </div>
                        <p>${design.price}</p>
                    </div>
                    <div className='shop__sec__icons'>
                        {isInCart ? (
                            <i className="uil uil-trash" onClick={() => removeFromCart(design)}></i>
                        ) : (
                            <i className="uil uil-shopping-cart first" onClick={() => addToCart({ ...design, quantity: 1 })}></i>
                        )}
                        <i className="uil uil-heart" style={{ color: likeColor }} onClick={handleLike}></i>
                    </div>
                </div>
            </div>

            <Backdrop
                open={open}
            >
                <ShopDetails
                    design={design}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    handleLike={handleLike}
                    likeIcon={likeIcon}
                    like={liked}
                    waiting={waiting}
                />
            </Backdrop>
        </>
    );
}

export default ShopItem;
