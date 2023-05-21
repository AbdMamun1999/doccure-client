import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <section className="flex h-[100vh] overflow-hidden">
      <Sidebar />
      <div className=" text-gray-900 w-full overflow-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
