import React from "react";
import styles from "./NavList.module.css";
import ItemList from "./ItemList";

const NavList = ({ categorySelected, setCategorySelected }) => {
  const list = [
    ["Apparels", ["Pants", "Jumpsuits", "Shorts", "Tops"]],
    ["Accessories", []],
    ["Houseware", []],
    ["Others", []],
    ["Techniques", []],
    ["Styles", ["Bold", "Monochrome", "Neutrals"]],
  ];
  return (
    <div className={styles.NavList}>
      <div
        className={styles.reset}
        onClick={() => setCategorySelected(["none", "none"])}
      >
        reset
      </div>
      {list.map((item) => (
        <ItemList
          name={item[0]}
          items={item[1]}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      ))}
    </div>
  );
};

export default NavList;
