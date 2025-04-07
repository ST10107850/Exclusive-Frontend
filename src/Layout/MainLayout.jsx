import React from "react";
import { Outlet } from "react-router-dom";
import { FooterPage } from "../Components/FooterPage";
import { NavbarPage } from "../Components/NavbarPage";

export const MainLayout = () => (
  <div>
    <NavbarPage />
    <main>
       <Outlet />
    </main>
   
    <FooterPage />
  </div>
);
