import React from "react";
import styles from "./Feature.module.css";

const Item = ({ name, price, imgSrc, new1 }) => {
  return (
    <div className={styles.Item}>
      <div className={styles.img}>
        <img src={imgSrc} />
        <div className={styles.new2 + " " + (new1 ? "" : styles.displayNone)}>
          new
        </div>
        <div className={styles.buttonForItem}>QUICK VIEW</div>
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{"$" + price + ".00"}</p>
      </div>
    </div>
  );
};

export default Item;
