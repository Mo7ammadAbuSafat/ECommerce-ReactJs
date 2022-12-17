import React from "react";
import HeaderProduct from "../Components/ProductComponents/HeaderProduct";
import styles from "../Components/ProductComponents/ProductComponents.module.css";
import Content from "../Components/Feature/content/Content";
import Data from "../Data";
import Text from "../Components/ProductComponents/Text";
import MayLike from "../Components/ProductComponents/MayLike";
import { useLocation } from "react-router-dom";

function ProductPage(props) {
  const location = useLocation();
  const { data } = location.state;
  if (typeof location.state === "undefined") {
    data = Data[0];
  }

  return (
    <>
      <div className={styles.ProductPage}>
        <HeaderProduct data={data} />
      </div>
      <div className={styles.container}>
        <Content data={data} thereIsAFullItemButton={false} />
      </div>
      <div className={styles.image}>
        <img src="icons/productPageImage.png" />
      </div>
      <Text />
      <div className={styles.container}>
        <MayLike />
      </div>
    </>
  );
}

export default ProductPage;
