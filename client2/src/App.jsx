import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Homepage from "./views/Homepage";
import Dashboard from "./views/admin/Dashboard";
import { EditCars } from "./views/admin/EditCars";
import { AddCars } from "./views/admin/AddCars";
import Cars from "./views/admin/Cars";

const App = () => {
  console.log(import.meta.env.VITE_REACT_API_URL);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddCars />} />
          <Route path="/edit/:id" element={<EditCars />} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar handleSmoothScroll={handleSmoothScroll} />
      <Home />
      <Product />
      <About />
      <Contact /> */}
    </>
  );
};

export default App;
