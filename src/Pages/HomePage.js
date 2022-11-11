import React from "react";
import styles from "../App.module.css";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Cover from "../Components/Cover/Cover";
import Feature from "../Components/Feature/Feature";
import About from "../Components/About/About";
import Explore from "../Components/Explore/Explore";
import Shop from "../Components/Shop/Shop";
import Recommended from "../Components/Recommended/Recommended";
import Seen from "../Components/Seen/Seen";
import Footer from "../Components/Footer/Footer";
import Text from "../Components/Cover/text";
import LeftArrow from "../Components/Cover/LeftArrow";
import RightArrow from "../Components/Cover/RightArrow";

function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <Cover imgSrc="../icons/coverHomePage.png">
        <LeftArrow />
        <Text />
        <RightArrow />
      </Cover>
      <Feature></Feature>
      <About />
      <Explore />
      <Shop />
      <Recommended />
      <Seen />
      <Footer />
    </>
  );
}

export default HomePage;
