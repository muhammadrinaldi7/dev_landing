import React from "react";
import Navbar from "../components/Navbars/Navbar";
import Home from "./user/Home";
import Product from "./user/Product";
import About from "./user/About";
import Contact from "./user/Contact";
import handleSmoothScroll from "../components/Fungsi/SmoothScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_URL = "http://localhost:3001/api/v1";
const Homepage = () => {
  return (
    <>
      <Navbar API_URL={API_URL} handleSmoothScroll={handleSmoothScroll} />
      <Home />
      <Product />
      <About />
      <Contact />
    </>
  );
};

export default Homepage;
