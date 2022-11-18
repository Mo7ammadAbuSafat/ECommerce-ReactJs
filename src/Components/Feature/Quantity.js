import React, { useState } from "react";
import styles from "./Popup.module.css";

const Quantity = (props) => {
  const [amount, setAmount] = useState(1);
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
        <button>Add to cart</button>
        <i class="fa-solid fa-question"></i>
        <div className={styles.add}>Add to wishlist</div>
      </div>
    </div>
  );
};

export default Quantity;
