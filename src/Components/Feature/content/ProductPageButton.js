import React from "react";
import { Link } from "react-router-dom";
import styles from "../Popup.module.css";

function ProductPageButton({ data, handleClose }) {
  return (
    <div className={styles.footer}>
      <Link to={`/ProductPage/${data.id}`}>
        <bottun onClick={() => handleClose()}>View Full product Details</bottun>
      </Link>
    </div>
  );
}

export default ProductPageButton;
