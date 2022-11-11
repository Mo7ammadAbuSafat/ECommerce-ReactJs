import React, { useState } from "react";
import styles from "./Feature.module.css";
import Title from "../SharedComponents/Title";

import ItemsContainer from "./ItemsContainer";

const Feature = () => {
  return (
    <div className={styles.Feature}>
      <Title text="Feature" />
      <ItemsContainer />
    </div>
  );
};

export default Feature;
