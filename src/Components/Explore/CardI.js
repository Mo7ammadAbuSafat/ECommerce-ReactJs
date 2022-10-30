import React from "react";
import styles from "./Explore.module.css";

const CardI = ({ name, imgSrc }) => {
  return (
    <div className={styles.Card}>
      <div className="top">
        <p className={styles.p1}>FIELDTESTED. JANUARY 19, 2017</p>
        <h2>{name}</h2>
      </div>
      <img src={imgSrc} />
    </div>
  );
};

export default CardI;
