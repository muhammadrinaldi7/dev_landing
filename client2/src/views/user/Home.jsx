import handleSmoothScroll from "../../components/Fungsi/SmoothScroll";
import { useState } from "react";
import Navbar from "../../components/Navbars/Navbar";

const Home = () => {
  return (
    <>
      <section
        id="Home"
        className="pt-20 min-h-screen flex flex-col items-center justify-between bg-gray-800"
      >
        <div className="absolute min-h-screen  w-full">
          <img
            className="h-auto mt-[5%] ml-[50%] translate-x-[-50%]"
            src="https://www.belitungtours.com/asap/assets/asap/pages/setting/kategori_sewa/images/2/220810095640_rental-mobil-belitung-murah_2.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col items-center z-20 lg:mt-[9%] mt-[53%] justify-center text-center">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
            Selamat Datang di{" "}
            <span className="text-[#FFC94A] italic">MASEDO RENT CAR</span>
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Temukan kenyamanan dan gaya dengan pilihan mobil terbaik kami
          </p>
          <a
            href="#Product"
            onClick={handleSmoothScroll}
            className="bg-blue-500 mt-16 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:scale-105 hover:shadow-md transition duration-300"
          >
            Jelajahi Sekarang
          </a>
        </div>
        <svg
          className="z-10 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FFFF"
            fill-opacity="1"
            d="M0,160L24,181.3C48,203,96,245,144,234.7C192,224,240,160,288,154.7C336,149,384,203,432,202.7C480,203,528,149,576,128C624,107,672,117,720,144C768,171,816,213,864,229.3C912,245,960,235,1008,202.7C1056,171,1104,117,1152,117.3C1200,117,1248,171,1296,176C1344,181,1392,139,1416,117.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Home;
