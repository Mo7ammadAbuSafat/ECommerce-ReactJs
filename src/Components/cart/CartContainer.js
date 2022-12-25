import React from "react";
import { useState, useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import CartContext from "../Store/CartContext";
import Data from "../../Data";
import Title from "../SharedComponents/Title";
import CartItem from "./CartItem";
import EmptyPageTitle from "../EmptyPageTitle/EmptyPageTitle";

function CartContainer() {
  const [total, setTotal] = useState();
  const Cart = useContext(CartContext);
  const handleDelete = (id) => {
    const newCart = Cart.cartItems.filter((item) => item.id != id);
    Cart.setCartItems(newCart);
  };
  const items = Cart.cartItems.map((item) => (
    <CartItem
      id={item.id}
      quantity={item.quantity}
      handleDelete={handleDelete}
      setTotal={setTotal}
      total={total}
    />
  ));
  var totalPrice = 0;
  useEffect(() => {
    Cart.cartItems.forEach((element) => {
      const index = Data.findIndex((item) => item.id == element.id);
      totalPrice +=
        element.quantity *
        Data[Data.findIndex((item) => item.id == element.id)].price;
    });
    setTotal(totalPrice);
  }, [Cart.cartItems]);

  return (
    <>
      {total > 0 ? (
        <>
          <Title text={"Cart"} />
          <div className={styles.container}>{items}</div>
          <h1 className={styles.h1}>Total Price = ${total}</h1>
        </>
      ) : (
        <EmptyPageTitle text={"No Item"} />
      )}
    </>
  );
}

export default CartContainer;
