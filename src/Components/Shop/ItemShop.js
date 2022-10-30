import React from "react";
import styles from "./Shop.module.css";

const ItemShop = ({ name, imgSrc }) => {
  return (
    <div className={styles.ItemShop}>
      <img src={imgSrc} />
      <div className={styles.name}>{name}</div>
      <div className={styles.buttonForItem}>Shop Now</div>
    </div>
  );
};

export default ItemShop;
