import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Checkout from "./views/Checkout.jsx";
import Checkout_ from "./views/Checkout_.jsx";
import Form from "./views/Form.jsx";
import Ticket from "./views/Ticket.jsx";
import PaymentSuccessful from "./views/PaymentSuccessful.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "contactSeller",
    element: <Ticket />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "checkout2",
    element: <Checkout_ />,
  },
  {
    path: "successful",
    element: <PaymentSuccessful />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
