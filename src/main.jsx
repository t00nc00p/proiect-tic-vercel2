import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import Movies from "./components/Movies.jsx";
import TheGrinch from "./components/TheGrinch.jsx";
import HomeAlone from "./components/HomeAlone.jsx";
import PolarExpress from "./components/PolarExpress.jsx";
import ChristmasChronicles from "./components/ChristmasChronicles.jsx";
import Register from "./components/Register.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/movies",
    element: (
      <>
        <Nav />
        <Movies />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Nav />
        <LogIn />
      </>
    ),
  },
  {
    path: "/thegrinch",
    element: (
      <>
        <Nav />
        <TheGrinch />
      </>
    ),
  },
  {
    path: "/homealone",
    element: (
      <>
        <Nav />
        <HomeAlone />
      </>
    ),
  },
  {
    path: "/polarexpress",
    element: (
      <>
        <Nav />
        <PolarExpress />
      </>
    ),
  },
  {
    path: "/christmaschronicles",
    element: (
      <>
        <Nav />
        <ChristmasChronicles />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Nav />
        <Register />
      </>
    ),
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
