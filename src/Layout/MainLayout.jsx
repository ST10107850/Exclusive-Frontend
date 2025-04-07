import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarPage } from "../Components/NavbarPage";
import FooterPage from "../Components/FooterPage";

export const MainLayout = () => (
  <div>
    <NavbarPage />
    <main>
       <Outlet />
    </main>
    <FooterPage />
  </div>
);
