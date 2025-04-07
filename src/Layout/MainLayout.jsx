import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <div>
    {/* <Navbar1 /> */}
    <main>
      <Outlet />
    </main>
    {/* <Footer1 /> */}
  </div>
);
