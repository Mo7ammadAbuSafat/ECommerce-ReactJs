import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import styles from "./Navbar.module.css";
const RightSubMenu = () => {
  const authContext = useContext(AuthContext);
  const set = () => {
    document
      .getElementsByClassName(styles.div1)[0]
      .classList.toggle(styles.displayNone);
  };
  return (
    <div className={styles.RightSubMenu}>
      <ul className={styles.ul1}>
        <li onClick={() => authContext.logout()}>
          {!authContext.isLoggedIn && <Link to="/LoginPage">login</Link>}
          {authContext.isLoggedIn && "logout"}
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
              <Link to="/FabricPage">fabric</Link>
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
