import React from "react";
import { Outlet } from "react-router-dom";
import  NavBar  from "../Components/Navbar";
import { FooterPage } from "../Components/FooterPage";

export const MainLayout = () => (
  <div>
    <NavBar />
    <main>
       <Outlet />
    </main>
   
    <FooterPage />
  </div>
);
