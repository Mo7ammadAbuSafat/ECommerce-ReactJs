import React from "react";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Cover from "../Components/Cover/Cover";
import Footer from "../Components/Footer/Footer";
import TitleForShop from "../Components/SharedComponents/TitleForShop";
import ShopBody from "../Components/ShopBody/ShopBody";

function ShopPage(props) {
  return (
    <>
      <Header />
      <Navbar />
      <Cover imgSrc={"../icons/Apearals.png"}>
        <TitleForShop
          name="Apparels"
          description="White Gold began gaining popularity in the early 1900’s as an alternative to platinum. "
        />
      </Cover>
      <ShopBody />
      <Footer />
    </>
  );
}

export default ShopPage;
