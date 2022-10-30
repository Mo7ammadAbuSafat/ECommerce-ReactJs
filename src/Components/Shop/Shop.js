import React from "react";
import styles from "./Shop.module.css";
import Title from "../SharedComponents/Title";
import ItemShop from "./ItemShop";

const Shop = () => {
  const itemsData = [
    {
      name: "Pants",
      imgSrc: "icons/i1.png",
    },
    {
      name: "Jumpsuits",
      imgSrc: "icons/i2.png",
    },
    {
      name: "Tops",
      imgSrc: "icons/i3.png",
    },
    {
      name: "Accessories",
      imgSrc: "icons/i4.png",
    },
  ];
  const items = itemsData.map((itemPro) => {
    return <ItemShop {...itemPro} />;
  });
  return (
    <div className={styles.Shop}>
      <Title text="Shop" />
      <div className={styles.containerItemsShop}>{items}</div>
    </div>
  );
};

export default Shop;
