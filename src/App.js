import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import AboutPage from "./Pages/AboutPage";
import JournalPage from "./Pages/JournalPage";
import ExplorePage from "./Pages/ExplorePage";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import styles from "./App.module.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/JournalPage" element={<JournalPage />} />
          <Route path="/ExplorePage" element={<ExplorePage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="*" element={<div>error 404</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
