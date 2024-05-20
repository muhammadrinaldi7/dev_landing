import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/Cards/ProductCard";
import img1 from "../../assets/img/cars/camry2020.png";
import Navbar from "../../components/Navbars/Navbar";

const Product = () => {
  // const [cars, setCars] = useState([]);
  // const getCars = () =>{
  //   axios.get('http://localhost:3001/api/v1/cars').then(res => {
  //     setMenus(res.data.data);
  //     console.log(menus);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }
  // useEffect(()=>{
  //   getCars();
  // },[]);

  const [catalog, setCatalog] = useState([]);

  const getCatalog = () => {
    axios
      .get("https://dev-landing-serv-api.vercel.app/api/v1/cars")
      .then((response) => {
        setCatalog(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCatalog();
  }, []);

  return (
    <>
      <section
        id="Product"
        className="pt-20 min-h-screen flex flex-wrap mb-20 items-center justify-center bg-[#FFFF]"
      >
        {catalog?.map((catalog) => (
          <ProductCard
            key={catalog.car_id}
            name={catalog.make}
            image={catalog.image}
            price={catalog.daily_rate}
            model={catalog.model}
            year={catalog.year}
            status={catalog.status}
          />
        ))}
      </section>
    </>
  );
};

export default Product;
