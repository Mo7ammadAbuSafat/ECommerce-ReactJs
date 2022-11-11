import React from "react";
import styles from "./NavList.module.css";

function ItemList({ name, items }) {
  let list = items.map((item) => (
    <li>
      {">  "} {item}
    </li>
  ));
  return (
    <div className={styles.ItemList}>
      <div>
        <p>{name}</p>
        <i class="fa-solid fa-chevron-up"></i>
      </div>
      <ul>{list}</ul>
    </div>
  );
}

export default ItemList;
