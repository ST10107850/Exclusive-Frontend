import React from "react";
import { Outlet } from "react-router-dom";
import HearderPage from "../Components/HearderPage";

export const MainLayout = () => (
  <div>
    <HearderPage />
    <main>
      <Outlet />
    </main>
    {/* <Footer1 /> */}
  </div>
);
