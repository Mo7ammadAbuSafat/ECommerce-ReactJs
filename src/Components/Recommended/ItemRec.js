import React from "react";
import styles from "./Recommended.module.css";

function ItemRec({ imgSrc, name }) {
  return (
    <div className={styles.ItemRec}>
      <img src={imgSrc} />
      <div className={styles.text}>{name}</div>
      <i class="fa-regular fa-circle-play"></i>
    </div>
  );
}

export default ItemRec;
