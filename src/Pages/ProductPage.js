import React from "react";
import HeaderProduct from "../Components/ProductComponents/HeaderProduct";
import styles from "../Components/ProductComponents/ProductComponents.module.css";
import Content from "../Components/Feature/content/Content";
import Data from "../Data";
import Text from "../Components/ProductComponents/Text";
import MayLike from "../Components/ProductComponents/MayLike";
import { useLocation, useParams } from "react-router-dom";

function ProductPage(props) {
  const { ProductId } = useParams();
  console.log(ProductId);
  const data = Data[Data.findIndex((item) => item.id == ProductId)];
  return (
    <>
      <div className={styles.ProductPage}>
        <HeaderProduct data={data} />
      </div>
      <div className={styles.container}>
        <Content data={data} thereIsAFullItemButton={false} />
      </div>
      <div className={styles.image}>
        <img src="/icons/productPageImage.png" />
      </div>
      <Text />
      <div className={styles.container}>
        <MayLike />
      </div>
    </>
  );
}

export default ProductPage;
