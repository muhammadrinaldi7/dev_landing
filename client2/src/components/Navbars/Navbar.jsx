import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import handleSmoothScroll from "../Fungsi/SmoothScroll";
import Logo from "../../assets/img/logmr.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Navbar({ handleSmoothScroll }) {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    setMenus([
      {
        id: 1,
        menu: "Home",
        path: "/",
      },
      {
        id: 2,
        menu: "Product",
        path: "/product",
      },
      {
        id: 3,
        menu: "About",
        path: "/about",
      },
      {
        id: 4,
        menu: "Contact",
        path: "/contact",
      },
    ]);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar">
      <div className="bg-gray-800 bg-opacity-75 text-white z-20 p-4 fixed top-0 w-full flex justify-between items-center transition-opacity duration-300 ease-in-out">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-lg font-roboto italic font-bold">
            MASEDO RENT CAR
          </h1>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        <div
          className={`md:flex md:space-x-4 ${
            isOpen ? "flex" : "hidden"
          } flex-col object-right rounded-md justify-center md:flex-row bg-opacity-70 absolute z-[1000] items-center md:relative bg-gray-900 w-full md:w-auto md:bg-transparent left-0 top-16 md:top-auto`}
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
          <div className="md:ml-[5%]">
            <Link
              to="/login"
              className="inline-block px-4 py-2 bg-[#EEF7FF] text-black  rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
