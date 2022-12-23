import React, { useState } from "react";
import styles from "./Feature.module.css";
import Title from "../SharedComponents/Title";
import ItemsContainer from "./ItemsContainer";
import Data from "../../Data";
import { Link } from "react-router-dom";

const Feature = () => {
  const itemsData = [...Data];
  return (
    <div className={styles.Feature}>
      <Title text="Feature" />
      <ItemsContainer itemsData={itemsData.slice(0, 8)} />
      <Link to="/ShopPage">
        <div className={styles.button}>Show More</div>
      </Link>
    </div>
  );
};

export default Feature;
