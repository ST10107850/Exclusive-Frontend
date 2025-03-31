import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout.jsx";
import { Homepage } from "./Pages/Homepage.jsx";
import { AboutPage } from "./Pages/AboutPage.jsx";
import { ContactPage } from "./Pages/ContactPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
);
