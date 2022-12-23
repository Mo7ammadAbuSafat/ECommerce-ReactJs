import React from "react";
import { useState, createContext } from "react";

const CartContext = createContext();

export function CartContextProvider(props) {
  const cartitems = [
    { id: 1, quantity: 2 },
    { id: 5, quantity: 3 },
  ];
  const [cartItems, setCartItems] = useState(cartitems);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
