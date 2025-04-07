import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar1 } from "../Components/Navbar1";
import { Footer1 } from "../Components/Footer1";

export const MainLayout = () => (
  <div>
    <Navbar1 />
    <main>
      <Outlet />
    </main>
    <Footer1 />
  </div>
);
