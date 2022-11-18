import React, { useState } from "react";
import NAvList from "../NavList/NavList";
import styles from "./ShopBody.module.css";
import ItemsContainer from "../Feature/ItemsContainer";
import Data from "../../Data";
import HeaderShop from "./HeaderShop";
import Cover from "../Cover/Cover";
import TitleForShop from "../SharedComponents/TitleForShop";

function ShopBody(props) {
  let itemsData = [...Data];
  const [compareForSort, setCompareForSort] = useState("none");
  const [categorySelected, setCategorySelected] = useState(["none", "none"]);
  if (categorySelected[0] != "none") {
    itemsData = itemsData.filter(
      (item) =>
        item.category[0] == categorySelected[0] &&
        item.category[1] == categorySelected[1]
    );
  }

  if (compareForSort == "price") {
    itemsData = [...itemsData].sort((a, b) => a.price - b.price);
  } else if (compareForSort == "name") {
    itemsData = [...itemsData].sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (compareForSort == "rate") {
    itemsData = [...itemsData].sort((a, b) => b.rate - a.rate);
  }
  return (
    <>
      <Cover imgSrc={"../icons/Apearals.png"}>
        <TitleForShop
          name={categorySelected[0] != "none" ? categorySelected[0] : "Shop"}
          description="White Gold began gaining popularity in the early 1900’s as an alternative to platinum. "
        />
      </Cover>
      <div className={styles.ShopBody}>
        <HeaderShop
          categorySelected={categorySelected}
          setCompareForSort={setCompareForSort}
        />
        <div className={styles.container}>
          <NAvList
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
          <div className={styles.itemsContainer}>
            <ItemsContainer itemsData={itemsData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopBody;
