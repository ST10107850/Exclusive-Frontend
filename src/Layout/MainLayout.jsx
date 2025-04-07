import React from "react";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
import  NavBar  from "../Components/Navbar";

export const MainLayout = () => (
  <div>
    <NavBar />
    <main>
       <Outlet />
    </main>
   
    <Footer />
  </div>
);
