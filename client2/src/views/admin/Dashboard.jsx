import React, { useState, useEffect } from "react";
import { NavAdmin } from "../../components/Navbars/NavAdmin";
import { BottomNav } from "../../components/Navbars/BottomNav";
import { HomeDashboard } from "./HomeDashboard";
import Cars from "./Cars";
import Customers from "./Customers";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Set initial state
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderActiveComponent = () => {
    switch (activeMenu) {
      case "home":
        return <HomeDashboard />;
      case "warnings":
        return <Cars />;
      case "statics":
        return <Customers />;
      default:
        return <HomeDashboard />;
    }
  };
  const username = localStorage.getItem("username");
  return (
    <>
      <section id="Dashboard" className="px-5 py-3 min-h-screen bg-slate-400 ">
        {isMobile ? (
          <BottomNav setActiveMenu={setActiveMenu} />
        ) : (
          <NavAdmin setActiveMenu={setActiveMenu} />
        )}
        {renderActiveComponent()}
      </section>
    </>
  );
};

export default Dashboard;
