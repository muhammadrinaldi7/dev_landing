import { useState, useEffect } from "react";
import React from "react";
import handleSmoothScroll from "../Fungsi/SmoothScroll";
import Logo from "../../assets/img/logmr.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Navbar({ API_URL, handleSmoothScroll }) {
  const [menus, setMenus] = useState([]);
  const getMenu = () => {
    axios
      // `${process.env.REACT_APP_API_URL}/menus`
      .get(`${import.meta.env.VITE_REACT_API_URL}/menus`)
      .then((res) => {
        setMenus(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMenu();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar">
      <div className="bg-gray-800 bg-opacity-75 text-white z-20 p-4 fixed top-0 w-full flex justify-normal items-center transition-opacity duration-300 ease-in-out">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-lg font-roboto italic font-bold">
            MASEDO RENT CAR
          </h1>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div
          className={`md:flex md:space-x-4 ${
            isOpen ? "flex" : "hidden"
          } flex-col object-right md:flex-row absolute ml-[55%] md:relative bg-gray-800 w-full md:w-auto md:bg-transparent left-0 top-16 md:top-auto`}
        >
          {menus?.map((menus) => (
            <a
              href={`#${menus.menu}`}
              key={menus.id}
              onClick={handleSmoothScroll}
              className="hover:text-gray-300 hover:underline p-2"
            >
              {menus.menu}
            </a>
          ))}
          <div className="ml-[5%]">
            <Link
              to="/login"
              className="inline-block px-4 py-2 bg-[#EEF7FF] text-black rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
