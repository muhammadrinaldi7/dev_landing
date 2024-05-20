import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      link: "/",
    },
    {
      id: 2,
      label: "Cars",
      link: "/",
    },
    {
      id: 3,
      label: "Service",
      link: "/",
    },
  ];

  return (
    <>
      <section
        className="flex left-0 w-[15%] flex-col py-4 px-4 min-h-screen border-2 border-black"
        id="Sidebar"
      >
        <span className="grid h-10 mb-4 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>
        <hr />
        <ul className="space-y-1 mt-5">
          {menuItems.map((item) => (
            <li className="hover:bg-gray-100 py-2 px-4 rounded-md">
              <a className="block" href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-[85%]">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
