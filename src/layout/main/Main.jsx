import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./Navigation";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
