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
import { LoginPage } from "./Pages/LoginPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
