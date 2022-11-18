import React from "react";
import styles from "../App.module.css";
import Cover from "../Components/Cover/Cover";
import Feature from "../Components/Feature/Feature";
import About from "../Components/About/About";
import Explore from "../Components/Explore/Explore";
import Shop from "../Components/Shop/Shop";
import Recommended from "../Components/Recommended/Recommended";
import Seen from "../Components/Seen/Seen";
import Text from "../Components/Cover/text";
import LeftArrow from "../Components/Cover/LeftArrow";
import RightArrow from "../Components/Cover/RightArrow";

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default HomePage;
