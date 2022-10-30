import React from "react";
import styles from "./Navbar.module.css";
const RightSubMenu = () => {
  const set = () => {
    document
      .getElementsByClassName(styles.div1)[0]
      .classList.toggle(styles.displayNone);
  };
  const array = ["shop", "fabric", "journal", "about"];
  const items = array.map((item) => {
    return (
      <li>
        {item}
        <i class="fa-solid fa-chevron-down"></i>
      </li>
    );
  });
  return (
    <div className={styles.RightSubMenu}>
      <ul className={styles.ul1}>
        <li>login</li>
        <li>
          <img src="./icons/search.svg" />
        </li>
        <li>
          <img src="./icons/heart.svg" />
        </li>
        <li>
          <img src="./icons/Shape.svg" />
        </li>
        <img
          onClick={set}
          className={styles.burgerMenu}
          src="./icons/menu-burger.png"
        />
      </ul>

      <div className={styles.burgerMenuItems}>
        <div className={styles.div1 + " " + styles.displayNone}>
          <ul className={styles.ul2}>{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default RightSubMenu;
