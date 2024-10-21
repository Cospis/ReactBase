import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
/* The following line can be included in your src/index.js or App.js file */
import "./App.scss";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "one",
    element: <One />,
  },
  {
    path: "Two",
    element: <Two />,
  },
  {
    path: "Three",
    element: <Three />,
  },
  {
    path: "Four",
    element: <Four />,
  },
  {
    path: "Five",
    element: <Five />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
