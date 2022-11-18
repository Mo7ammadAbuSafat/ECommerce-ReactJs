import React, { useState } from "react";
import styles from "./Popup.module.css";

const NamePriceRatePart = ({ data }) => {
  const rate = data.rate;
  const price = data.price;
  const name = data.name;
  return (
    <div className={styles.namePriceRatePart}>
      <p className={styles.name}>{name}</p>
      <div className={styles.priceRate}>
        <p className={styles.price}>SGD {price} </p>
        <div className={styles.rate}>
          {[1, 2, 3, 4, 5].map((no) => {
            return (
              <i
                class="fa-solid fa-star"
                style={{ color: no <= rate ? "yellow" : "silver" }}
              ></i>
            );
          })}
          <p>{rate} of 5</p>
        </div>
      </div>
    </div>
  );
};

export default NamePriceRatePart;
