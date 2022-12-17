import React from "react";
import styles from "./ProductComponents.module.css";

const HeaderProduct = ({ data }) => {
  return (
    <div className={styles.header}>
      <p>
        Women{"  >  "}
        {data.category[0] +
          "  >  " +
          data.category[1] +
          "  >  " +
          data.name.split(" ").slice(0, 3).join(" ")}
      </p>
    </div>
  );
};

export default HeaderProduct;
