import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cover.module.css";

const Text = () => {
  return (
    <div className={styles.text}>
      <h1>Perfume Tips Tricks</h1>
      <Link to="/ShopPage">
        <span>Shop Now</span>
      </Link>
    </div>
  );
};

export default Text;
