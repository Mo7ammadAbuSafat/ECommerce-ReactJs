import React from "react";
import { Link } from "react-router-dom";
import styles from "../Popup.module.css";

function ProductPageButton({ data }) {
  return (
    <div className={styles.footer}>
      <Link to={`/ProductPage`} state={{ data: data }}>
        <bottun>View Full product Details</bottun>
      </Link>
    </div>
  );
}

export default ProductPageButton;
