import * as React from "react";
import * as ReactDom from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root, {loader as RootLoader } from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      }
    ]
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
