import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

const ShopItem = ({ design }) => {
    const { addToCart, removeFromCart, cart } = useShoppingCart();
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    const likeColor = liked ? "var(--red-color)" : "";

    const isInCart = cart.some(item => item.id === design.id);

    return (
        <div className="design">
            <img id='shot__main__img' src={design.img} alt="" />
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
    );
}

export default ShopItem;
