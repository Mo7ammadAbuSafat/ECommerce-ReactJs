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

function HomePage() {
  const imgSrc = [
    "../icons/coverHomePage.png",
    "../icons/coverHomePage1.png",
    "../icons/coverHomePage2.png",
  ];
  return (
    <>
      <Cover imgSrc={imgSrc}>
        <Text />
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
