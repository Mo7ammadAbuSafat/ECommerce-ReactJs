import React from "react";
import styles from "./Navbar.module.css";
import LeftSubMenu from "./LeftSubMenu";
import RightSubMenu from "./RightSubMenu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.a} exact to="/">
        <img className={styles.img} src="./icons/matter.png" />
      </Link>
      <div className={styles.Menu}>
        <LeftSubMenu />
        <RightSubMenu />
      </div>
    </div>
  );
};

export default Navbar;
