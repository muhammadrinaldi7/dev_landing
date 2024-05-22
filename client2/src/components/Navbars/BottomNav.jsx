import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";

export const BottomNav = ({ setActiveMenu }) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveMenu(tab);
  };
  return (
    <>
      <div className="btm-nav z-20">
        <button
          className={`hover:bg-[#A0DEFF] ${
            activeTab === "home" ? "active" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="btm-nav-label">Home</span>
        </button>
        <button
          className={`hover:bg-[#A0DEFF] ${
            activeTab === "warnings" ? "active" : ""
          }`}
          onClick={() => handleTabClick("warnings")}
        >
          <FontAwesomeIcon icon={faCar} />
          <span className="btm-nav-label">Cars</span>
        </button>
        <button
          className={`hover:bg-[#A0DEFF] ${
            activeTab === "statics" ? "active" : ""
          }`}
          onClick={() => handleTabClick("statics")}
        >
          <FontAwesomeIcon icon={faPerson} />
          <span className="btm-nav-label">Customers</span>
        </button>
      </div>
    </>
  );
};
