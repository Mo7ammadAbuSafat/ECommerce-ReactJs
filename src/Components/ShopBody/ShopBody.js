import React, { useState } from "react";
import NAvList from "../NavList/NavList";
import styles from "./ShopBody.module.css";
import ItemsContainer from "../Feature/ItemsContainer";
import Data from "../../Data";

function ShopBody(props) {
  let itemsData = [...Data];
  const [compareForSort, setCompareForSort] = useState("none");

  if (compareForSort == "price") {
    itemsData = [...itemsData].sort((a, b) => a.price - b.price);
  } else if (compareForSort == "name") {
    itemsData = [...itemsData].sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (compareForSort == "rate") {
    itemsData = [...itemsData].sort((a, b) => b.rate - a.rate);
  }
  return (
    <div className={styles.ShopBody}>
      <div className={styles.header}>
        <p>Women</p>
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
      <div className={styles.container}>
        <NAvList />
        <div className={styles.itemsContainer}>
          <ItemsContainer itemsData={itemsData} />
        </div>
      </div>
    </div>
  );
}

export default ShopBody;
