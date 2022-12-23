import React, { useState } from "react";
import PhotosPart from "./PhotosPart";
import DetailsPart from "./DetailsPart";
import styles from "../Popup.module.css";
import ProductPageButton from "./ProductPageButton";

const Content = ({ data, thereIsAFullItemButton, handleClose }) => {
  return (
    <>
      <div className={styles.body}>
        <PhotosPart data={data} />
        <DetailsPart data={data} handleClose={handleClose} />
      </div>
      {thereIsAFullItemButton && (
        <ProductPageButton data={data} handleClose={handleClose} />
      )}
    </>
  );
};

export default Content;
