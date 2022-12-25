import React from "react";
import { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import AboutPage from "./Pages/AboutPage";
import JournalPage from "./Pages/JournalPage";
import FabricPage from "./Pages/FabricPage";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import styles from "./App.module.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import CartContext from "./Components/Store/CartContext";
import ScrollToTop from "./Components/ScrollUp";
import { useParams } from "react-router";
import RegistrationPage from "./Pages/RegistrationPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/JournalPage" element={<JournalPage />} />
          <Route path="/FabricPage" element={<FabricPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/ProductPage/:ProductId" element={<ProductPage />} />
          <Route path="*" element={<div>error 404</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
