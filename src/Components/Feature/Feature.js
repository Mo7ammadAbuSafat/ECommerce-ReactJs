import React from "react";
import styles from "./Feature.module.css";
import Title from "../SharedComponents/Title";
import Item from "./Item";
import CustomizedDialogs from "./MaterialUi";

const Feature = () => {
  const itemsData = [
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i1.png",
      new1: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i2.png",
      new1: false,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i3.png",
      new1: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i4.png",
      new1: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i5.png",
      new1: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i6.png",
      new1: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i7.png",
      new1: false,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: 599.0,
      imgSrc: "icons/i8.png",
      new1: false,
    },
  ];

  const items = itemsData.map((itemPro) => {
    return <Item {...itemPro} />;
  });

  return (
    <div className={styles.Feature}>
      <Title text="Feature" />
      <div className={styles.itemsContainer}>{items}</div>
      <CustomizedDialogs />
    </div>
  );
};

export default Feature;
