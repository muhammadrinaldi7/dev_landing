import { useState } from "react";

export const NavAdmin = ({ setActiveMenu }) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveMenu(tab);
  };
  return (
    <>
      <div className="navbar bg-slate-50 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleTabClick("home")}>Homepage</a>
              </li>
              <li>
                <a onClick={() => handleTabClick("warnings")}>Cars</a>
              </li>
              <li>
                <a onClick={() => handleTabClick("statics")}>Customers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Car Rent</a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};
