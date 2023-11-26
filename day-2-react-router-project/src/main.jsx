import * as React from "react";
import * as ReactDom from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root, {loader as RootLoader, action as RootAction } from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact, {loader as ContactLoader} from "./routes/Contact";
import Edit, {action as EditAction } from "./routes/Edit";
import Index from "./routes/index";
import {action as DeleteAction } from "./routes/DeleteContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
    action: RootAction,
    children: [
      {
        index: true,
        element: <Root />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: ContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <Edit />,
        loader: ContactLoader,
        action: EditAction,
      },{
        path: "contacts/:contactId/destroy",
        action: DeleteAction,
        errorElement: <div>Opps! There was an error.</div> 
      },
    ]
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
