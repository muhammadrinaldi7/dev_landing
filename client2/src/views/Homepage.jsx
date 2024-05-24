import React from "react";
import Navbar from "../components/Navbars/Navbar";
import Home from "./user/Home";
import Product from "./user/Product";
import About from "./user/About";
import Contact from "./user/Contact";
import handleSmoothScroll from "../components/Fungsi/SmoothScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => {
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

export default Homepage;
