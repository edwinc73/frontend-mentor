import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LightBoxProvider } from "./context/lightBoxContext";
import { CartProvider } from "./context/cartContext";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <LightBoxProvider>
        <RouterProvider router={router}></RouterProvider>
      </LightBoxProvider>
    </CartProvider>
  </StrictMode>
);
