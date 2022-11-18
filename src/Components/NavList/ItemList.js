import React, { useState } from "react";
import styles from "./NavList.module.css";

function ItemList({ name, items, categorySelected, setCategorySelected }) {
  let list = items.map((item) => (
    <li
      onClick={() => setCategorySelected([name, item])}
      className={categorySelected[1] == item ? styles.orange : ""}
    >
      {">  "} {item}
    </li>
  ));

  const [flag, setFlag] = useState(categorySelected[0] == name);
  return (
    <div className={styles.ItemList}>
      <div onClick={() => setFlag(!flag)}>
        <p>{name}</p>
        <i
          className={
            "fa-solid" +
            " " +
            (flag || categorySelected[0] == name
              ? "fa-chevron-up"
              : "fa-chevron-down")
          }
        ></i>
      </div>
      <ul
        className={
          flag || categorySelected[0] == name ? "" : styles.displayNone
        }
      >
        {list}
      </ul>
    </div>
  );
}

export default ItemList;
