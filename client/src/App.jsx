import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import handleSmoothScroll from "./components/Fungsi/SmoothScroll";
import Product from "./views/user/Product";
import Home from "./views/user/Home";
import About from "./views/user/About";
import Contact from "./views/user/Contact";

const App = () => {
  return (
    <>
      <Navbar handleSmoothScroll={handleSmoothScroll} />
      <Home />
      <Product />
      <About />
      <Contact />
    </>
  );
};

export default App;
