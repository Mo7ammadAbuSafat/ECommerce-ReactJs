import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const LeftSubMenu = () => {
  return (
    <div className={styles.LeftSubMenu}>
      <ul>
        <li>
          <Link to="/ShopPage">shop</Link>
        </li>
        <li>
          <Link to="/FabricPage">fabric</Link>
        </li>
        <li>
          <Link to="/JournalPage">journal</Link>
        </li>
        <li>
          <Link to="/AboutPage">about</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSubMenu;
