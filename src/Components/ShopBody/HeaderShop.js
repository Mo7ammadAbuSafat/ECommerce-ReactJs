import React from "react";
import styles from "./ShopBody.module.css";

const HeaderShop = ({ categorySelected, setCompareForSort }) => {
  return (
    <div className={styles.header}>
      <p>
        Women {categorySelected[1] != "none" ? "> " + categorySelected[1] : ""}
      </p>
      <div>
        Sort by
        <select onChange={(e) => setCompareForSort(e.target.value)}>
          <option selected value="none">
            NONE
          </option>
          <option value="price">PRICE</option>
          <option value="rate">RATE</option>
          <option value="name">NAME</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderShop;
