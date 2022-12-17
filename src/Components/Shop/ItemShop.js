import React from "react";
import { Link } from "react-router-dom";
import styles from "./Shop.module.css";

const ItemShop = ({ name, imgSrc }) => {
  return (
    <div className={styles.ItemShop}>
      <img src={imgSrc} />
      <div className={styles.name}>{name}</div>
      <Link to="/ShopPage" className={styles.buttonForItem}>
        <div>Shop Now</div>
      </Link>
    </div>
  );
};

export default ItemShop;
