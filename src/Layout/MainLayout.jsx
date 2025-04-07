import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar1 } from "../Components/Navbar1.jsx";

export const MainLayout = () => (
  <div>
    <Navbar1 />
    <main>
      <Outlet />
    </main>
    {/* <Footer1 /> */}
  </div>
);
