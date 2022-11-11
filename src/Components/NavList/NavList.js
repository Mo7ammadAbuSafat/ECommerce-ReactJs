import React from "react";
import styles from "./NavList.module.css";
import ItemList from "./ItemList";

function NavList(props) {
  return (
    <div className={styles.NavList}>
      <ItemList
        name="Apparels"
        items={["Pants", "Jumpsuits", "Shorts", "Tops"]}
      />
      <ItemList
        name="Apparels"
        items={["Pants", "Jumpsuits", "Shorts", "Tops"]}
      />
      <ItemList
        name="Apparels"
        items={["Pants", "Jumpsuits", "Shorts", "Tops"]}
      />
    </div>
  );
}

export default NavList;
