import React from "react";
import styles from "./Navbar.module.css";
import LeftSubMenu from "./LeftSubMenu";
import RightSubMenu from "./RightSubMenu";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img src="./icons/matter.png" />
      <div className={styles.Menu}>
        <LeftSubMenu />
        <RightSubMenu />
      </div>
    </div>
  );
};

export default Navbar;
