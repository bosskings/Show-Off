import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (index !== -1) {
      // If the item is already in the cart, increment its quantity
      updatedCart[index].quantity =
        (updatedCart[index].quantity || 1) + (quantity || 1);
    } else {
      // If the item is not in the cart, add it with quantity 1
      updatedCart.push({ ...item, quantity: quantity || 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const updateQuantity = (item, newQuantity) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (index !== -1) {
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
    }
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
