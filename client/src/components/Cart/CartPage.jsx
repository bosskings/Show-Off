import React from 'react';
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
            <h1>Cart</h1>
            {cart.length > 0 ? (
                cart.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleIncrement(item)}>+</button>
                        <button onClick={() => handleDecrement(item)}>-</button>
                    </div>
                ))
            ) : (
                <div className="empty-cart">
                    {/* Display "Empty Cart" image or message */}
                    {/* <img src="../../assets/9005390.jpg" alt="Empty Cart" /> */}
                    {/* Or a simple text message */}
                    <p>Your cart is empty.</p>
                </div>
            )}
            <p>Total Price: ${totalPrice}</p>
            <p>Total Quantity: {totalQuantity}</p>
        </div>
    );
}

export default CartPage;
