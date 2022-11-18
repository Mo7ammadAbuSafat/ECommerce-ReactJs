import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import styles from "./App.module.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route path="*" element={<div>error 404</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
