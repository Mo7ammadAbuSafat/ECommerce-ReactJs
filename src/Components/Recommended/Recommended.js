import React from "react";
import Title from "../SharedComponents/Title";
import styles from "./Recommended.module.css";
import ItemRec from "./ItemRec";

const Recommended = () => {
  const itemsData = [
    {
      name: "Lorem ipsum dolor sit amet",
      imgSrc: "icons/s1.png",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      imgSrc: "icons/s2.png",
    },
    {
      name: "Jampans",
      imgSrc: "icons/s3.png",
    },
  ];
  const items = itemsData.map((itemPro) => {
    return <ItemRec {...itemPro} />;
  });
  return (
    <div className={styles.Recommended}>
      <Title text="Recommended Videos" />
      <div className={styles.containerItemsRec}>{items}</div>
      <div className={styles.button}>Show More</div>
    </div>
  );
};

export default Recommended;
