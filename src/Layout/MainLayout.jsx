import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPage from "../Components/NavbarPage";
import FooterPage from "../Components/FooterPage";
import { Navbar1 } from "../Components/Navbar1";

export const MainLayout = () => (
  <div>
    <Navbar1 />
    <main>
       <Outlet />
    </main>
    <FooterPage />
  </div>
);
