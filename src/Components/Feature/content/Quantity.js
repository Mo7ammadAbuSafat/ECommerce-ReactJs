import React from "react";
import { useState, useContext } from "react";
import styles from "../Popup.module.css";
import CartContext from "../../Store/CartContext";

const Quantity = ({ data, handleClose }) => {
  const Cart = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const id = data.id;
  const quantityToSend = amount;
  return (
    <div className={styles.quantity}>
      <p>Quantity</p>
      <div className={styles.quantityDiv}>
        <div className={styles.count}>
          <div
            className={styles.minus}
            onClick={() => {
              if (amount > 1) setAmount(amount - 1);
            }}
          >
            -
          </div>
          <div className={styles.counter}>{amount}</div>
          <div className={styles.plus} onClick={() => setAmount(amount + 1)}>
            +
          </div>
        </div>
        <button
          onClick={() => {
            Cart.setCartItems([
              ...Cart.cartItems,
              { id: id, quantity: quantityToSend },
            ]);
            handleClose();
          }}
        >
          Add to cart
        </button>
        <i class="fa-solid fa-question"></i>
        <div className={styles.add}>Add to wishlist</div>
      </div>
    </div>
  );
};

export default Quantity;
