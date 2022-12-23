import React from "react";
import CartContainer from "../Components/cart/CartContainer";
import { useContext, createContext } from "react";
import CartContext from "../Components/Store/CartContext";

function CartPage(props) {
  return (
    <>
      <CartContainer />
    </>
  );
}

export default CartPage;
