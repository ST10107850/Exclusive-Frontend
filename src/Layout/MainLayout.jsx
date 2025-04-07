import React from "react";
import  Na  from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <Na />
      <Outlet />
      <Footer />
    </div>
  );
};
