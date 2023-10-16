import React from 'react';

import RatingStars from '../Shop/RatingStars';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useShoppingCart();

    const handleIncrement = (item) => {
        updateQuantity(item, item.quantity + 1);
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item, item.quantity - 1);
        } else {
            removeFromCart(item);
        }
    };


    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    return (
        <div className='bg2 section'>
            <div className='container'>
                <div className='cart'>
                    <div className='cart__left'>
                        <h1 className='cart__head'>Shopping Cart</h1>
                        <p className='cart__item-quantity'>{totalQuantity} Item in Cart</p>
                        <hr className='line' />
                        {cart.length > 0
                            ? <div className='cart__items' >
                                {
                                    cart.map(item => (
                                        <div key={item.id} className='cart__item'>
                                            <img id='cart__item-img' src={item.img} alt={item.title} width={150} />
                                            <div className='cart__sec'>
                                                <div className='cart__sec__details'>
                                                    <p id='cart__sec__details-title'>{item.title}</p>
                                                    <div className='rating'>
                                                        <RatingStars rating={item.rating} />
                                                    </div>
                                                    <p className='cart__sec__details-price'>Price: ${item.price}</p>
                                                </div>
                                                <div className='cart__sec__icons'>
                                                    <button onClick={() => handleIncrement(item)}>+</button>
                                                    <p>{item.quantity}</p>
                                                    <button onClick={() => handleDecrement(item)}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            : (
                                <div className="empty-cart">
                                    {/* Display "Empty Cart" image or message */}
                                    {/* <img src="../../assets/9005390.jpg" alt="Empty Cart" /> */}
                                    {/* Or a simple text message */}
                                    <p>Your cart is empty.</p>
                                </div>
                            )
                        }
                    </div>

                    <div className='cart__right'>
                        <div className='cart__right-inner'>
                            <div className='cart__right-inner__div'>
                                <p className='cart__item-total'>Total:</p>
                                <p className='cart__item-price'> ${totalPrice}</p>
                            </div>
                            <div>
                                <button>Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CartPage;
