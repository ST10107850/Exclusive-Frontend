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
import { ProductDetailsPage } from "./Pages/ProductDetailsPage.jsx";
import { CartPage } from "./Pages/CartPage.jsx";
import { ShopPage } from "./Pages/ShopPage.jsx";
import { CheckoutPage } from "./Pages/CheckoutPage.jsx";
import { OrderConfirmationPage } from "./Pages/OrderConfirmationPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="product-details" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shops" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirm-order" element={<OrderConfirmationPage />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
