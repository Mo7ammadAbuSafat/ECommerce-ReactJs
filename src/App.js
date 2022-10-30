import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Cover from "./Components/Cover/Cover";
import Feature from "./Components/Feature/Feature";
import About from "./Components/About/About";
import Explore from "./Components/Explore/Explore";
import Shop from "./Components/Shop/Shop";
import Recommended from "./Components/Recommended/Recommended";
import Seen from "./Components/Seen/Seen";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Cover />
      <Feature />
      <About />
      <Explore />
      <Shop />
      <Recommended />
      <Seen />
      <Footer />
    </>
  );
};
export default App;
