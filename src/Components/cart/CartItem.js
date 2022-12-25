import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Data from "../../Data";
import styles from "./Cart.module.css";

function CartItem({ id, quantity, handleDelete, setTotal, total }) {
  const [amount, setAmount] = useState(quantity);
  const index = Data.findIndex((item) => item.id == id);
  return (
    <div className={styles.item}>
      <img src={Data[index].imgs[0]} />
      <p>{Data[index].name}</p>
      <div className={styles.subItem}>
        <div>${Data[index].price}</div>
        <div>
          <div className={styles.count}>
            <div
              className={styles.minus}
              onClick={() => {
                if (amount > 1) {
                  setAmount(amount - 1);
                  setTotal(total - Data[index].price);
                }
              }}
            >
              -
            </div>
            <div className={styles.counter}>{amount}</div>
            <div
              className={styles.plus}
              onClick={() => {
                setAmount(amount + 1);
                setTotal(total + Data[index].price);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to={`/ProductPage/${Data[index].id}`}>
            <button>view</button>
          </Link>
          <button onClick={() => handleDelete(Data[index].id)}>delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
