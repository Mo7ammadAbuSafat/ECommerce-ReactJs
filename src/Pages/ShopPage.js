import React from "react";
import Cover from "../Components/Cover/Cover";
import TitleForShop from "../Components/SharedComponents/TitleForShop";
import ShopBody from "../Components/ShopBody/ShopBody";

function ShopPage(props) {
  return (
    <>
      <Cover imgSrc={"../icons/Apearals.png"}>
        <TitleForShop
          name="Apparels"
          description="White Gold began gaining popularity in the early 1900’s as an alternative to platinum. "
        />
      </Cover>
      <ShopBody />
    </>
  );
}

export default ShopPage;
