import React from "react";
import styles from "./Navbar.module.css";
const LeftSubMenu = () => {
  const array = ["shop", "fabric", "journal", "about"];
  const items = array.map((item) => {
    return (
      <li>
        {item}
        <img src="./icons/down-arrow-56.png" />
      </li>
    );
  });
  return (
    <div className={styles.LeftSubMenu}>
      <ul>{items}</ul>
    </div>
  );
};

export default LeftSubMenu;
