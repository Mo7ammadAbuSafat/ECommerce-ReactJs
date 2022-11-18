import React, { useState } from "react";
import styles from "./Feature.module.css";
import Title from "../SharedComponents/Title";
import ItemsContainer from "./ItemsContainer";
import Data from "../../Data";

const Feature = () => {
  const itemsData = [...Data];
  return (
    <div className={styles.Feature}>
      <Title text="Feature" />
      <ItemsContainer itemsData={itemsData} />
    </div>
  );
};

export default Feature;
