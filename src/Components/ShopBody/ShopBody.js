import React from "react";
import NAvList from "../NavList/NavList";
import styles from "./ShopBody.module.css";
import ItemsContainer from "../Feature/ItemsContainer";

function ShopBody(props) {
  return (
    <div className={styles.ShopBody}>
      <div className={styles.header}>
        <p>Women</p>
        <div>
          Sort by
          <select>
            <option>PRICE</option>
            <option>RATE</option>
            <option>NAME</option>
            <option>DATE</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        <NAvList />
        <div className={styles.itemsContainer}>
          <ItemsContainer />
        </div>
      </div>
    </div>
  );
}

export default ShopBody;
