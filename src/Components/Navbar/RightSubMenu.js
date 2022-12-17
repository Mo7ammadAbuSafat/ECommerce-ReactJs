import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const RightSubMenu = () => {
  const set = () => {
    document
      .getElementsByClassName(styles.div1)[0]
      .classList.toggle(styles.displayNone);
  };
  return (
    <div className={styles.RightSubMenu}>
      <ul className={styles.ul1}>
        <li>
          <Link to="/LoginPage">login</Link>
        </li>
        <li>
          <Link to="/WishlistPage">
            <img src="./icons/heart.svg" />
          </Link>
        </li>
        <li>
          <Link to="/CartPage">
            <img src="./icons/Shape.svg" />
          </Link>
        </li>
        <img
          onClick={set}
          className={styles.burgerMenu}
          src="./icons/menu-burger.png"
        />
      </ul>

      <div className={styles.burgerMenuItems}>
        <div className={styles.div1 + " " + styles.displayNone}>
          <ul className={styles.ul2}>
            <li onClick={set}>
              <Link to="/ShopPage">shop</Link>
            </li>
            <li onClick={set}>
              <Link to="/ExplorePage">explore</Link>
            </li>
            <li onClick={set}>
              <Link to="/JournalPage">journal</Link>
            </li>
            <li onClick={set}>
              <Link to="/AboutPage">about</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSubMenu;
