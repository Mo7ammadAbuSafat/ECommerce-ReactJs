import React from "react";
import styles from "./Title.module.css";

const TitleForShop = ({ name, description }) => {
  return (
    <div className={styles.TitleForShop}>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TitleForShop;
